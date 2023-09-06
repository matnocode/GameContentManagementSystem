using GamContentSystemApi.Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace GamContentSystemApi.Database
{
    public class GcsDbContext : DbContext
    {
        public GcsDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
        }

        public DbSet<Dialog> Dialogs { get; set; }
        public DbSet<Character> Characters { get; set; }
        public DbSet<Quest> Quests { get; set; }
    }
}
