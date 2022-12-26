using YADA.WebApi;

var builder = WebApplication.CreateBuilder(args);

var app = builder
    .ConfigureServices()
    .ConfigurePipeline();

if (args.Contains("-db-reset") && app.Environment.IsDevelopment())
{
    await app.ResetDatabaseAsync();
}

app.Run();