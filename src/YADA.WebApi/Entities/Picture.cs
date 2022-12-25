using System.Diagnostics;

namespace YADA.WebApi.Entities
{
    [DebuggerDisplay("{Url}")]
    public class Picture
    {
        public int Id { get; set; }

        public Uri Url { get; set; }

        public string Description { get; set; }
    }
}