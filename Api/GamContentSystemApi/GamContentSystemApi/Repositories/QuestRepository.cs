using GamContentSystemApi.Database;
using GamContentSystemApi.Database.Entities;
using GamContentSystemApi.Interfaces;

namespace GamContentSystemApi.Repositories
{
    public class QuestRepository : BaseRepository<Quest>, IQuestRepository
    {
        public QuestRepository(GcsDbContext dbContext) : base(dbContext)
        {
        }
    }
}
