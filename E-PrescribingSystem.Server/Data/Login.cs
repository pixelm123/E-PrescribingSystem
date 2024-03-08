using System.ComponentModel.DataAnnotations;


namespace E_PrescribingSystem.Server.Data
{
    public class Login
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        public bool RememberMe { get; set; }
    }
}
