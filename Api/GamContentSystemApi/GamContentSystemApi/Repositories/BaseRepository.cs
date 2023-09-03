using GamContentSystemApi.Database;
using GamContentSystemApi.Database.Entities;
using GamContentSystemApi.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace GamContentSystemApi.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : BaseEntity
    {
        public BaseRepository(GcsDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        protected GcsDbContext dbContext;

        public async Task<T?> GetAsync(int id, CancellationToken cancellationToken)
        {
            return await dbContext.Set<T>().FirstOrDefaultAsync(x => x.Id == id, cancellationToken);
        }

        public async Task<List<T>> GetAllAsync(CancellationToken cancellationToken)
        {
            return await dbContext.Set<T>().ToListAsync(cancellationToken);
        }

        public async Task UpdateAsync(T entity, CancellationToken cancellationToken)
        {
            dbContext.Set<T>().Update(entity);
            await dbContext.SaveChangesAsync(cancellationToken);
        }

        public async Task RemoveAsync(T entity, CancellationToken cancellationToken)
        {
            dbContext.Set<T>().Remove(entity);
            await dbContext.SaveChangesAsync(cancellationToken);
        }

        public async Task RemoveAsync(int id, CancellationToken cancellationToken)
        {
            var entity = await GetAsync(id, cancellationToken) ?? throw new Exception("Could not find entity with that id");
            dbContext.Set<T>().Remove(entity);
            await dbContext.SaveChangesAsync(cancellationToken);
        }

        public async Task AddAsync(T entity, CancellationToken cancellationToken)
        {
            await dbContext.Set<T>().AddAsync(entity, cancellationToken);
            await dbContext.SaveChangesAsync(cancellationToken);
        }
    }
}
