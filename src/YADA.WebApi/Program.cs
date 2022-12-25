using YADA.WebApi;

var builder = WebApplication.CreateBuilder(args);

var app = builder
    .ConfigureServices()
    .ConfigurePipeline();

await app.ResetDatabaseAsync();

app.Run();