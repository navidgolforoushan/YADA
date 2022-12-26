using System.ComponentModel.DataAnnotations;
using YADA.WebApi.Entities;

namespace YADA.WebApi.Models
{
    public class ProfileForPostDto
    {
        public DateOnly DateOfBirth { get; set; }

        public string? DisplayName { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string? PhoneNumber { get; set; }

    }
}
