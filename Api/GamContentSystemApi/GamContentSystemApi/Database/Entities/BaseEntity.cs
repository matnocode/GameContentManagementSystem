using System.ComponentModel.DataAnnotations;

namespace GamContentSystemApi.Database.Entities
{
    public class BaseEntity
    {
        [Key]
        public int Id { get; private set; }
    }
}
