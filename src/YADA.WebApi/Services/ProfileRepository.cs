using Microsoft.EntityFrameworkCore;
using YADA.WebApi.DbContexts;
using YADA.WebApi.Entities;

namespace YADA.WebApi.Services
{
    internal class ProfileRepository : IProfileReporsitory
    {
        private readonly ApplicationContext _context;
        private readonly int _maximumRowReturnAllowance;


        public ProfileRepository(ApplicationContext context, IConfiguration configuration)
        {
            _context = context ??
                throw new ArgumentException(nameof(context));
            var maximumRowReturnAllowanceAsString = configuration["DataAccess:MaximumRowReturnAllowance"] ??
                throw new ArgumentException(nameof(configuration));

            _maximumRowReturnAllowance = int.Parse(maximumRowReturnAllowanceAsString);
        }

        public void AddPicture(Picture picture)
        {
            throw new NotImplementedException();
        }

        public async Task<Profile> AddProfile(Profile profile)
        {
            var res= await _context.Profiles.AddAsync(profile);
            return res.Entity;
        }

        public void DeletePicture(Picture picture)
        {
            throw new NotImplementedException();
        }

        public void DeleteProfile(Profile profile)
        {
            throw new NotImplementedException();
        }

        public async Task<Profile> GetProfileByIdAsync(Guid profileId)
        {
            var res = await _context.Profiles
                .Include(x => x.Preference)
                .Include(x => x.Pictures)
                .FirstOrDefaultAsync(x => x.ProfileId == profileId);
            return res!;
        }

        public Task<IEnumerable<Picture>> GetProfilePicturesByIdAsync(Guid profileId)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Profile>> GetProfilesAsync()
        {
            var res = await _context.Profiles
                .Take(_maximumRowReturnAllowance)
                .OrderBy(x => x.Setting)
                .ToListAsync();
            return res;
        }

        public Task<bool> PrfileExistAsync(Guid profileId)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> SaveAsync()
        {
            var numbderOfWriteToDatabase=await _context.SaveChangesAsync();
            return numbderOfWriteToDatabase > 0;
        }

        public void UpdatePicture(Picture picture)
        {
            throw new NotImplementedException();
        }

        public void UpdateProfile(Profile profile)
        {
            throw new NotImplementedException();
        }
    }
}