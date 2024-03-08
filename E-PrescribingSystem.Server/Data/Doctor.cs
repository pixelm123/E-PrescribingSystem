using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace E_PrescribingSystem.Server.Data
{
    public class Doctor
    {
        [Key]
        public int DoctorId { get; set; }

        [Required]
        public string UserId { get; set; }

        [Required]
        public string HospitalName { get; set; }

        [Required]
        public int SpecialtyId { get; set; }

        [ForeignKey("SpecialtyId")]
        public Specialty Specialty { get; set; }

       
    }
}
