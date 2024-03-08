using Microsoft.AspNetCore.Identity;

namespace E_PrescribingSystem.Server.Data
{
    public class ApplicationUser : IdentityUser
    {
        public string HospitalName { get; set; }
        public string Department { get; set; }

        public string MedicalSpecialty { get; set; }

        public string PharmacyName { get; set; }

    }
}
