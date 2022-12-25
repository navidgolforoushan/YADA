using YADA.WebApi.DbContexts;
using YADA.WebApi.Entities;
using YADA.WebApi.Services;

namespace YADA.WebApi
{
    public class SeedData
    {
        public async static Task InitializeAsync(ApplicationContext context)
        {
            var profile1 = new Profile
            {
                ProfileId = Guid.Parse("878ed28d-a731-42bf-8997-25d69c3ad452"),
                DateOfBirth = new DateOnly(1985, 1, 15),
                DisplayName = "Navid",
                Email = "ngolforoushan@gmail.com",
                FirstName = "navid",
                LastName = "golforoushan",
                PhoneNumber = "4808036119",
                Pictures = new List<Picture> {
                            new Picture { Id = 1, Url = new Uri("https://localhost"), Description = "Cover" },
                            new Picture { Id = 2, Url = new Uri("https://localhost"), Description = "My alter ego!" }
                        },
                Preference = new Preference { AgeMax = 40, AgeMin = 25, Distance = 30 },
                Setting = new Setting { Id = 1, SendEmail = false },
                UserName = "ngolforoushan37"
            };

            var profile2 = new Profile
            {
                ProfileId = Guid.Parse("878ed28d-a732-42bf-8997-25d69c3ad451"),
                DateOfBirth = new DateOnly(1987, 4, 22),
                DisplayName = "Nima",
                Email = "ngogl@gmail.com",
                FirstName = "nima",
                LastName = "golforoushan",
                PhoneNumber = "6324899",
                Pictures = new List<Picture> {
                            new Picture { Id = 3, Url = new Uri("https://localhost"), Description = "Cover" },
                            new Picture { Id = 4, Url = new Uri("https://localhost"), Description = "That's me" }
                },
                Preference = new Preference { AgeMax = 32, AgeMin = 22, Distance = 60 },
                Setting = new Setting { Id = 2, SendEmail = false },
                UserName = "nimpx34"
            };



            await context.Settings.AddRangeAsync(profile1.Setting, profile2.Setting);
            await context.Preferences.AddRangeAsync(profile1.Preference, profile2.Preference);
            await context.Pictures.AddRangeAsync(profile1.Pictures.Concat(profile2.Pictures));
            await context.Profiles.AddRangeAsync(profile1, profile2);
        }
    }
}
