using System.ComponentModel.DataAnnotations;

namespace YADA.WebApi.Entities
{
    public class Preference
    {

        public int Id { get; set; }


        /// <summary>
        /// Match's minimum acceptable age
        /// </summary>
        [Required]
        [Range(18, 79)]
        public int AgeMin { get; set; } = 18;

        /// <summary>
        /// Match's maximum acceptable age
        /// </summary>
        [Required]
        [Range(19, 80)]
        public int AgeMax { get; set; } = 80;

        /// <summary>
        /// Distance in mile
        /// </summary>
        [Required]
        [Range(0,3000)]
        public int Distance { get; set; } = 60;
    }
}
