using System.ComponentModel.DataAnnotations;
using System.Diagnostics;

namespace YADA.WebApi.Entities
{
    [DebuggerDisplay("User={UserName}")]

    public class Profile
    {
        public Guid ProfileId{ get; set; }

        [Required]
        public string UserName { get; set; }

        public DateOnly DateOfBirth { get; set; }

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

        public Setting Setting { get; set; }

        public Preference Preference { get; set; }

        public IEnumerable<Picture> Pictures { get; set; } = new List<Picture>();

    }
}
