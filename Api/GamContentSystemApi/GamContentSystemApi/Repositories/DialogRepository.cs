using GamContentSystemApi.Database;
using GamContentSystemApi.Database.Entities;
using GamContentSystemApi.Interfaces;

namespace GamContentSystemApi.Repositories
{
    public class DialogRepository : BaseRepository<Dialog>, IDialogRepository
    {
        public DialogRepository(GcsDbContext dbContext) : base(dbContext)
        {
        }
    }
}
