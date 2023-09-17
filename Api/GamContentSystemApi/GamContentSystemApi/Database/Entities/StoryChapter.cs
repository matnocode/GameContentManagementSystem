namespace GamContentSystemApi.Database.Entities
{
    public class StoryChapter : BaseEntity
    {
        public string? Title { get; set; }
        public string? Summary { get; set; }
        public string? Content { get; set; }
    }
}
