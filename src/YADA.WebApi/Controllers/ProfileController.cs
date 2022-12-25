﻿using AutoMapper;
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

        [HttpGet("{profileId:guid}")]
        public async Task<ActionResult<ProfileDto>> Get(Guid profileId)
        {
            var profileFromRepo = await _profileReporsitory.GetProfileByIdAsync(profileId);
            return Ok(_mapper.Map<ProfileDto>(profileFromRepo));
        }
    }
}
