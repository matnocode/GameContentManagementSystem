using GamContentSystemApi.Database;
using GamContentSystemApi.Database.Entities;
using GamContentSystemApi.Interfaces;

namespace GamContentSystemApi.Repositories
{
    public class StoryChapterRepository : BaseRepository<StoryChapter>, IStoryChapterRepository
    {
        public StoryChapterRepository(GcsDbContext context) : base(context)
        {
        }
    }
}
