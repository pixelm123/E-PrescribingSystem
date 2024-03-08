using System.ComponentModel.DataAnnotations;

namespace E_PrescribingSystem.Server.Data
{
    public class Register
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }

        [Required]
        public string Role { get; set; }

        [Required(ErrorMessage = "Hospital name is required.")]
        public string HospitalName { get; set; }

        public string Department { get; set; }

        public string MedicalSpecialty { get; set; }
        public string PharmacyName { get; set; }
    }
}
