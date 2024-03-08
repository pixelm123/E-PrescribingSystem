using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace E_PrescribingSystem.Server.Data
{
    
        public class Nurse
        {
            [Key]
            public int NurseId { get; set; }

            [Required]
            public string UserId { get; set; }

            [Required]
            public string HospitalName { get; set; }

            [Required]
            public int DepartmentId { get; set; }

            [ForeignKey("DepartmentId")]
            public Department Department { get; set; }

           
        

         }
}
