using Microsoft.AspNetCore.Mvc;

namespace E_PrescribingSystem.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NurseController : ControllerBase
    {
        [HttpGet("dashboard")]
        public IActionResult Dashboard()
        {
            return Ok(new { WelcomeMessage = "Welcome to your Dashboard, Nurse!" });
        }
    }
}
