using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace E_PrescribingSystem.Server.Data
{
    public class Pharmacist
    {
        [Key]
        public int PharmacistId { get; set; }

        [Required]
        public string UserId { get; set; }

        [Required]
        public string HospitalName { get; set; }

        [Required]
        public int PharmacyId { get; set; }

        [ForeignKey("PharmacyId")]
        public Pharmacy Pharmacy { get; set; }
    }
}
