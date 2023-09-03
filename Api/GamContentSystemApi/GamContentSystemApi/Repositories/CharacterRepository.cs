using GamContentSystemApi.Database;
using GamContentSystemApi.Database.Entities;
using GamContentSystemApi.Interfaces;

namespace GamContentSystemApi.Repositories
{
    public class CharacterRepository : BaseRepository<Character>, ICharacterRepository
    {
        public CharacterRepository(GcsDbContext dbContext) : base(dbContext)
        {
        }
    }
}
