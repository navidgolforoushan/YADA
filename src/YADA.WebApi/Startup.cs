using YADA.WebApi.DbContexts;
using Microsoft.EntityFrameworkCore;
using YADA.WebApi.Services;
using Serilog;

namespace YADA.WebApi
{
    public static class Startup
    {
        private static readonly string OUTPUT_TEMPLATE = "[{Timestamp:HH:mm:ss} {Level:u3}] {ConnectionId} {Message:lj}{NewLine}{Exception}";

        public static WebApplication ConfigureServices(this WebApplicationBuilder builder)
        {
            var logger = new LoggerConfiguration()
                .ReadFrom.Configuration(builder.Configuration)
                .Enrich.FromLogContext()
                .WriteTo.Console(outputTemplate: OUTPUT_TEMPLATE)
                .CreateLogger();
            builder.Logging.ClearProviders();
            builder.Logging.AddSerilog(logger);

            builder.Services.AddHttpContextAccessor();
            builder.Services.AddControllers(o =>
                o.ReturnHttpNotAcceptable = true)
                .AddXmlSerializerFormatters();
            builder.Services.AddScoped<IProfileReporsitory, ProfileRepository>();
            builder.Services.AddDbContext<ApplicationContext>(o =>
                o.UseSqlite(@"Data Source=database.db"));
            builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            return builder.Build();
        }

        public static WebApplication ConfigurePipeline(this WebApplication app)
        {
            Console.Title = $"YADA-WebApi ({app.Environment.EnvironmentName})";
            Log.Information($"Starting web application");

            if (app.Environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler(appBuilder =>
                {
                    appBuilder.Run(async context =>
                    {
                        context.Response.StatusCode = StatusCodes.Status500InternalServerError;
                        await context.Response.WriteAsync($"[ConnectionId={context.Connection.Id}]:An unexpected fault happend. Try again later.");
                    });
                });
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
                    Log.Error(ex, "An error occured while migrating the database.");
                }
            }
        }
    }
}
