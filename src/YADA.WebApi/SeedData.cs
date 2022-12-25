using YADA.WebApi.DbContexts;
using YADA.WebApi.Entities;
using YADA.WebApi.Services;

namespace YADA.WebApi
{
    public class SeedData
    {
        public async static Task InitializeAsync(IServiceProvider serviceProvider)
        {
            var repo = serviceProvider.GetRequiredService<IProfileReporsitory>();
            await repo.SaveAsync();
        }
    }
}
