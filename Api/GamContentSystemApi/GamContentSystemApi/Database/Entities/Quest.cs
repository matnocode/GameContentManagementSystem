namespace GamContentSystemApi.Database.Entities
{
    public class Quest : BaseEntity
    {
        public string? Title { get; set; }
        public int? StoryChapterId { get; set; }
        public int? QuestActionId { get; set; }
        public int? BaseItemId { get; set; }

        public StoryChapter? StoryChapter { get; set; }
        public QuestAction? QuestAction { get; set; }
        public BaseItem? BaseItem { get; set; }
    }
}
