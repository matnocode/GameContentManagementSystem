using GamContentSystemApi.Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace GamContentSystemApi.Database
{
    public class GcsDbContext : DbContext
    {
        public GcsDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
        }

        DbSet<Dialog> Dialogs;
        DbSet<Character> Characters;
        DbSet<Quest> Quests;
    }
}
