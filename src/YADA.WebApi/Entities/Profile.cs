using AutoMapper.Configuration.Annotations;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace YADA.WebApi.Entities
{
    public class Profile
    {

        [Key]
        public Guid Id { get; set; }

        public DateOnly DateOfBirth { get; set; }

        [Required]
        public string UserName { get; set; }

        [Required]
        public string DisplayName { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string PhoneNumber { get; set; }


        [ForeignKey("SettingId")]
        public Setting Setting { get; set; }

        [ForeignKey("PreferenceId")]
        public Preference Preference { get; set; }

        public IEnumerable<Picture> Pictures { get; set; } = new List<Picture>();

    }
}
