using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2Assignment.Models
{
    public class CalculatorModel
    {
        [Required]
        public int Assignment { get; set; }
        [Required]
        public int GroupProject { get; set; }
        [Required]
        public int Quizzes { get; set; }
        [Required]
        public int Exams { get; set; }
        [Required]
        public int Intex { get; set; }
    }
}
