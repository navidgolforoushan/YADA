
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using YADA.WebApi.Entities;

namespace YADA.WebApi.DbContexts
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) { }

        public DbSet<Profile> Profiles { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Profile>().HasData(
                new Profile
                {
                    //Id=Guid.Parse("878ed28d-a731-42bf-8997-25d69c3ad452"),
                    ProfileId=1,
                    UserName = "ngolforoushan"

                    //DateOfBirth = new DateOnly(1985, 01, 15),
                    //DisplayName = "Navid",
                    //Email = "ngolforoushan@gmail.com",
                    //FirstName = "Navid",
                    //LastName = "Golforoushan",
                    //PhoneNumber = "4808036119",
                    ////Pictures= new[]{
                    ////    new Picture{Id=1,url=new Uri("https://localhost/ngolforoushan/1.jpg"),Description="Cover"},
                    ////    new Picture{Id=2,url=new Uri("https://localhost/ngolforoushan/2.jpg"),Description="My alter ego!"}
                    ////},
                    ////Preference = new Preference { Id=1, AgeMax = 40, AgeMin = 25, Distance = 60 },
                    ////Setting = new Setting { Id = 1 },
                });
            
            //if(Database.ProviderName== "Microsoft.EntityFrameworkCore.Sqlite")
            //{
            //    foreach (var entityType in modelBuilder.Model.GetEntityTypes())
            //    {
            //        var properties = entityType.ClrType.GetProperties()
            //            .Where(p => p.PropertyType == typeof(DateTimeOffset) || p.PropertyType == typeof(DateTimeOffset?));
            //        foreach (var property in properties)
            //        {
            //            modelBuilder.Entity(entityType.Name)
            //                .Property(property.Name)
            //                .HasConversion(new DateTimeOffsetToBinaryConverter());
            //        }
            //    }
            //}
            //base.OnModelCreating(modelBuilder);
        }
    }
}
