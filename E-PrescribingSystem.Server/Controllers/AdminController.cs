using Microsoft.AspNetCore.Mvc;

namespace E_PrescribingSystem.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        [HttpGet("dashboard")]
        public IActionResult Dashboard()
        {
            return Ok(new { WelcomeMessage = "Welcome to your Dashboard, Admin!" });
        }
    }
}
