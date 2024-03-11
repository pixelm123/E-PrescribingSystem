using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using E_PrescribingSystem.Server.Data;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace E_PrescribingSystem.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public AccountController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(Register model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            List<string> validRoles = new List<string> { "admin", "doctor", "nurse", "pharmacist" };
            if (!validRoles.Contains(model.Role.ToLower()))
            {
                return BadRequest("Invalid user role");
            }

            ApplicationUser user = new ApplicationUser
            {
                UserName = model.Username,
                Email = model.Email,
                HospitalName = model.HospitalName,
                Department = model.Department,
                MedicalSpecialty = model.MedicalSpecialty,
                PharmacyName = model.PharmacyName
            };

            IdentityResult result = await _userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }

            await _userManager.AddToRoleAsync(user, model.Role);

            
            if (!await _roleManager.RoleExistsAsync("Admin"))
            {
                await _roleManager.CreateAsync(new IdentityRole("Admin"));
            }

            
            if (_userManager.Users.Count() == 1)
            {
                await _userManager.AddToRoleAsync(user, "Admin");
            }

            
            return RedirectToDashboard(model.Role.ToLower());
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login(Login model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var result = await _signInManager.PasswordSignInAsync(model.Username, model.Password, model.RememberMe, lockoutOnFailure: false);

            if (result.Succeeded)
            {
                
                var user = await _userManager.FindByNameAsync(model.Username);
                var roles = await _userManager.GetRolesAsync(user);
                return RedirectToDashboard(roles);
            }
            else
            {
                return BadRequest("Invalid login attempt");
            }
        }

        private IActionResult RedirectToDashboard(IList<string> roles)
        {
            if (roles.Contains("Admin"))
            {
                return RedirectToAction("Dashboard", "Admin");
            }
            else if (roles.Contains("Doctor"))
            {
                return RedirectToAction("Dashboard", "Doctor");
            }
            else if (roles.Contains("Nurse"))
            {
                return RedirectToAction("Dashboard", "Nurse");
            }
            else if (roles.Contains("Pharmacist"))
            {
                return RedirectToAction("Dashboard", "Pharmacist");
            }
            else
            {
                return BadRequest("Invalid user role");
            }
        }


        [HttpGet("dashboard")]
        public IActionResult Dashboard(string userRole)
        {
            return Ok(new { WelcomeMessage = GetWelcomeMessage(userRole.ToLower()) });
        }

        private IActionResult RedirectToDashboard(string role)
        {
            switch (role.ToLower())
            {
                case "admin":
                    return RedirectToAction("Dashboard", "Admin");
                case "doctor":
                    return RedirectToAction("Dashboard", "Doctor");
                case "nurse":
                    return RedirectToAction("Dashboard", "Nurse");
                case "pharmacist":
                    return RedirectToAction("Dashboard", "Pharmacist");
                default:
                    return BadRequest("Invalid user role");
            }
        }

        private string GetWelcomeMessage(string userRole)
        {
            switch (userRole)
            {
                case "admin":
                    return "Welcome to your Dashboard, Admin!";
                case "doctor":
                    return "Welcome to your Dashboard, Doctor!";
                case "nurse":
                    return "Welcome to your Dashboard, Nurse!";
                case "pharmacist":
                    return "Welcome to your Dashboard, Pharmacist!";
                default:
                    return "Welcome to your Dashboard!";
            }
        }
    }
}
