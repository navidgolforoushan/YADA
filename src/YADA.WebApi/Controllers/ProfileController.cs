using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using YADA.WebApi.Models;
using YADA.WebApi.Services;

namespace YADA.WebApi.Controllers
{
    public class ProfileController : Controller
    {
        private readonly IProfileReporsitory _profileReporsitory;
        private readonly IMapper _mapper;

        public ProfileController(
            IProfileReporsitory profileReporsitory,
            IMapper mapper)
        {
            this._profileReporsitory = profileReporsitory ??
                throw new ArgumentException(nameof(profileReporsitory));
            this._mapper = mapper ??
                throw new ArgumentException(nameof(mapper));
        }

        [HttpPost("api/profile")]
        public async Task<ActionResult<IEnumerable<ProfileDto>>> GetProfiles()
        {
            var profilesFromRepo = await _profileReporsitory.GetProfilesAsync();
            return Ok(_mapper.Map<IEnumerable<ProfileDto>>(profilesFromRepo));
        }

        [HttpGet("api/getprofile/{profileId}", Name = "GetProfile")]
        public async Task<ActionResult<ProfileDto>> GetProfile(Guid profileId)
        {
            var profileFromRepo = await _profileReporsitory.GetProfileByIdAsync(profileId);
            return Ok(_mapper.Map<ProfileDto>(profileFromRepo));
        }
    }
}
