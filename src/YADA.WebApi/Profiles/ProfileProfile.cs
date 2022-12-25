using AutoMapper;
namespace YADA.WebApi.Profiles
{
    public class ProfileProfile : Profile
    {
        public ProfileProfile()
        {
            CreateMap<Entities.Profile, Models.ProfileDto>()
                .ForMember(des => des.Age, opt => opt.MapFrom(src => (src.DateOfBirth.ToDateTime(new TimeOnly()) - DateTime.Now).TotalDays / 365.2425))
                .ForMember(des => des.FUllName, opt => opt.MapFrom(src => $"{src.FirstName}  {src.LastName}"));
        }
    }
}
