using YADA.WebApi.Entities;

namespace YADA.WebApi.Services
{
    public interface IProfileReporsitory
    {
        Task<IEnumerable<Profile>> GetProfilesAsync();
        Task<Profile> GetProfileByIdAsync(Guid profileId);
        Task<Profile> AddProfile(Profile profile);
        void UpdateProfile(Profile profile);
        void DeleteProfile(Profile profile);


        Task<IEnumerable<Picture>> GetProfilePicturesByIdAsync(Guid profileId);
        void AddPicture(Picture picture);
        void UpdatePicture(Picture picture);
        void DeletePicture(Picture picture);

        Task<bool> PrfileExistAsync(Guid profileId);
        Task<bool> SaveAsync();
    }
}