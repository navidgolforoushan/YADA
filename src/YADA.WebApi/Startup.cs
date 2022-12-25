using YADA.WebApi.DbContexts;
using Microsoft.EntityFrameworkCore;
using YADA.WebApi.Services;
using YADA.WebApi.Entities;

namespace YADA.WebApi
{
    public static class Startup
    {
        public static WebApplication ConfigureServices(this WebApplicationBuilder builder)
        {
            builder.Services.AddControllers(o => o.ReturnHttpNotAcceptable = true)
                .AddXmlSerializerFormatters();
            builder.Services.AddScoped<IProfileReporsitory, ProfileRepository>();
            builder.Services.AddDbContext<ApplicationContext>(o => o.UseSqlite(@"Data Source=database.db"));
            builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            return builder.Build();
        }

        public static WebApplication ConfigurePipeline(this WebApplication app)
        {
            if (app.Environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseAuthorization();
            app.MapControllers();

            return app;
        }

        public static async Task ResetDatabaseAsync(this WebApplication app)
        {
            using (var scope = app.Services.CreateScope())
            {
                try
                {
                    var context = scope.ServiceProvider.GetService<ApplicationContext>();
                    if (context is not null)
                    {
                        await context.Database.EnsureDeletedAsync();
                        await context.Database.MigrateAsync();
                        var settings1 = new Setting { Id = 1, SendEmail = false };
                        var prefernce1 = new Preference { AgeMax = 40, AgeMin = 25, Distance = 30 };
                        var pictures1 = new List<Picture> {
                            new Picture { Id = 1, Url = new Uri("https://localhost"), Description = "Cover" },
                            new Picture { Id = 2, Url = new Uri("https://loc"), Description = "My alter ego!" }
                        };
                        var profile1 = new Profile
                        {
                            ProfileId = Guid.Parse("878ed28d-a731-42bf-8997-25d69c3ad452"),
                            DateOfBirth = new DateOnly(1985, 1, 15),
                            DisplayName = "Navid",
                            Email = "ngolforoushan@gmail.com",
                            FirstName = "navid",
                            LastName = "golforoushan",
                            PhoneNumber = "4808036119",
                            Pictures = pictures1,
                            Preference = prefernce1,
                            Setting = settings1,
                            UserName = "ngolforoushan37"
                        };
                        await context.Settings.AddAsync(settings1);
                        await context.Preferences.AddAsync(prefernce1);
                        await context.Pictures.AddRangeAsync(pictures1);
                        await context.Profiles.AddAsync(profile1);
                        await context.SaveChangesAsync();
                    }
                }
                catch (Exception ex)
                {
                    var logger = scope.ServiceProvider.GetService<ILogger>();
                    logger?.LogError(ex, "An error occured while migrating the database.");
                }
            }
        }
    }
}
