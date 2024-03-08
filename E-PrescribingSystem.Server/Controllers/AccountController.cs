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

        public AccountController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
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

            
            if (_userManager.Users.Count() == 1)
            {
                await _userManager.AddToRoleAsync(user, "Admin");
            }

            
            if (model.Role.ToLower() == "nurse")
            {
                
                if (string.IsNullOrWhiteSpace(model.HospitalName))
                {
                    return BadRequest("Hospital name is required for nurse");
                }

                
                if (string.IsNullOrWhiteSpace(model.Department))
                {
                    return BadRequest("Department is required for nurse");
                }

                
                user.HospitalName = model.HospitalName;
                user.Department = model.Department;
            }
            else if (model.Role.ToLower() == "doctor")
            {
                
                if (string.IsNullOrWhiteSpace(model.HospitalName))
                {
                    return BadRequest("Hospital name is required for doctor");
                }

                
                if (string.IsNullOrWhiteSpace(model.MedicalSpecialty))
                {
                    return BadRequest("Medical specialty is required for doctor");
                }

                
                user.HospitalName = model.HospitalName;
                user.MedicalSpecialty = model.MedicalSpecialty;
            }
            else if (model.Role.ToLower() == "pharmacist")
            {
                
                if (string.IsNullOrWhiteSpace(model.PharmacyName))
                {
                    return BadRequest("Pharmacy name is required for pharmacist");
                }

                
                user.PharmacyName = model.PharmacyName;
            }

            
            await _userManager.UpdateAsync(user);

            
            return Ok("User registered successfully");
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
                return Ok("User logged in successfully");
            }
            else
            {
                return BadRequest("Invalid login attempt");
            }
        }

        [HttpGet("dashboard")]
        public IActionResult Dashboard(string userRole)
        {
            string welcomeMessage;

            switch (userRole.ToLower())
            {
                case "admin":
                    welcomeMessage = "Welcome to your Dashboard, Admin!";
                    break;
                case "doctor":
                    welcomeMessage = "Welcome to your Dashboard, Doctor!";
                    break;
                case "nurse":
                    welcomeMessage = "Welcome to your Dashboard, Nurse!";
                    break;
                case "pharmacist":
                    welcomeMessage = "Welcome to your Dashboard, Pharmacist!";
                    break;
                default:
                    welcomeMessage = "Welcome to your Dashboard!";
                    break;
            }

            return Ok(new { WelcomeMessage = welcomeMessage });
        }
    }
}
