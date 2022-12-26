using AutoMapper;
using Microsoft.EntityFrameworkCore.Sqlite.Storage.Internal;
using System.Net.Mail;

namespace YADA.WebApi.Profiles
{
    public class ProfileProfile : Profile
    {
        public ProfileProfile()
        {
            CreateMap<Entities.Profile, Models.ProfileDto>()
                .ForMember(des => des.Age, opt => opt.MapFrom(src => GetAge(src.DateOfBirth)))
                .ForMember(des => des.FullName, opt => opt.MapFrom(src => $"{src.FirstName}  {src.LastName}"));

            CreateMap<Models.ProfileForPostDto, Entities.Profile>()
                .ForMember(des => des.UserName, opt => opt.MapFrom(src => new MailAddress(src.Email).User))
                .ForMember(des => des.DisplayName, opt => opt.MapFrom(src => src.DisplayName ?? src.FirstName));
        }

        private double GetAge(DateOnly dateOfBirth)
        {
            var age= (DateTime.Now - dateOfBirth.ToDateTime(new TimeOnly())).TotalDays / 365.00;
            return age > 80 || age < 18 ? -1 : age;
        }
    }
}
