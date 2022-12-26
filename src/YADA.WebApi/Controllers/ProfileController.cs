using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using YADA.WebApi.Models;
using YADA.WebApi.Services;

namespace YADA.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
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

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProfileDto>>> Get()
        {
            var profilesFromRepo = await _profileReporsitory.GetProfilesAsync();
            return Ok(_mapper.Map<IEnumerable<ProfileDto>>(profilesFromRepo));
        }

        [HttpGet("{profileId:guid}", Name = "GetProfile")]
        public async Task<ActionResult<ProfileDto>> Get(Guid profileId)
        {
            var profileFromRepo = await _profileReporsitory.GetProfileByIdAsync(profileId);

            if (profileFromRepo is null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<ProfileDto>(profileFromRepo));
        }

        [HttpPost]
        public async Task<ActionResult<ProfileDto>> Post(ProfileForPostDto profile)
        {
            var profileEntity = _mapper.Map<Entities.Profile>(profile);
            profileEntity = await _profileReporsitory.AddProfile(profileEntity);
            await _profileReporsitory.SaveAsync();
            var profileToReturn = _mapper.Map<ProfileDto>(profileEntity);
            var routeValue = new { profileId = profileEntity.ProfileId };
            return CreatedAtRoute("GetProfile", routeValue, profileToReturn);

        }
    }
}
