namespace GamContentSystemApi.Database.Entities
{
    public enum QuestType 
    {
        FirstQuest, SecondQuest, ThirdQuest
    }

    public class Quest : BaseEntity
    {
        public string? Name { get; set; }
        public QuestType QuestType { get; set; }
    }
}
