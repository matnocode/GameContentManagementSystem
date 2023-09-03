using GamContentSystemApi.Database.Entities;

namespace GamContentSystemApi.Interfaces
{
    public interface IBaseRepository<T> where T : BaseEntity
    {
        Task<T?> GetAsync(int id, CancellationToken cancellationToken);

        Task<List<T>> GetAllAsync(CancellationToken cancellationToken);

        Task UpdateAsync(T entity, CancellationToken cancellationToken);

        Task RemoveAsync(T entity, CancellationToken cancellationToken);

        Task RemoveAsync(int id, CancellationToken cancellationToken);

        Task AddAsync(T entity, CancellationToken cancellationToken);
    }
}
