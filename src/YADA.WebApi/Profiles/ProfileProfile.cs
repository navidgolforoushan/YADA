using AutoMapper;
namespace YADA.WebApi.Profiles
{
    public class ProfileProfile : Profile
    {
        public ProfileProfile()
        {
            CreateMap<Entities.Profile, Models.ProfileDto>()
                .ForMember(des => des.Age, opt => opt.MapFrom(src => (DateTime.Now - src.DateOfBirth.ToDateTime(new TimeOnly())).TotalDays / 365.00))
                .ForMember(des => des.FUllName, opt => opt.MapFrom(src => $"{src.FirstName}  {src.LastName}"));
        }
    }
}
