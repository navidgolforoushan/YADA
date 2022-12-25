using YADA.WebApi.DbContexts;
using Microsoft.EntityFrameworkCore;
using YADA.WebApi.Services;

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
                        await SeedData.InitializeAsync(context);
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
