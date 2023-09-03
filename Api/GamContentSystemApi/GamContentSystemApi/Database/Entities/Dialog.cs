namespace GamContentSystemApi.Database.Entities
{
    public class Dialog : BaseEntity
    {
        public Character? Speaker { get; set; }
        public string? Content { get; set; }
    }
}
