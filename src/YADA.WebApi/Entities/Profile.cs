using System.ComponentModel.DataAnnotations;
using System.Diagnostics;

namespace YADA.WebApi.Entities
{
    [DebuggerDisplay("User={UserName}")]

    public class Profile
    {
        public Guid ProfileId{ get; set; }

        public string UserName { get; set; }

        public DateOnly DateOfBirth { get; set; }

        public string DisplayName { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string? PhoneNumber { get; set; }

        public Setting? Setting { get; set; }

        public Preference? Preference { get; set; }

        public IEnumerable<Picture> Pictures { get; set; } = new List<Picture>();

    }
}
