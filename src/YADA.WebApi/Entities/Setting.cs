using System.ComponentModel.DataAnnotations;

namespace YADA.WebApi.Entities
{
    public class Setting
    {
        public int Id { get; set; }

        public bool SendEmail { get; set; } = false;

    }
}
