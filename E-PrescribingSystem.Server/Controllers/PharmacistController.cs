using Microsoft.AspNetCore.Mvc;

namespace E_PrescribingSystem.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PharmacistController : ControllerBase
    {
        [HttpGet("dashboard")]
        public IActionResult Dashboard()
        {
            return Ok(new { WelcomeMessage = "Welcome to your Dashboard, Pharmacist!" });
        }
    }
}
