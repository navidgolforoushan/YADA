using YADA.WebApi.Entities;

namespace YADA.WebApi.Services
{
    internal class ProfileRepository : IProfileReporsitory
    {
        public void AddPicture(Picture picture)
        {
            throw new NotImplementedException();
        }

        public void AddProfile(Profile profile)
        {
            throw new NotImplementedException();
        }

        public void DeletePicture(Picture picture)
        {
            throw new NotImplementedException();
        }

        public void DeleteProfile(Profile profile)
        {
            throw new NotImplementedException();
        }

        public Task<Profile> GetProfileByIdAsync(Guid profileId)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Picture>> GetProfilePicturesByIdAsync(Guid profileId)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Profile>> GetProfilesAsync()
        {
            throw new NotImplementedException();
        }

        public Task<bool> PrfileExistAsync(Guid profileId)
        {
            throw new NotImplementedException();
        }

        public Task<bool> SaveAsync()
        {
            throw new NotImplementedException();
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