using GamContentSystemApi.Interfaces;
using GamContentSystemApi.Repositories;

namespace GamContentSystemApi.Configuration
{
    public static class ConfigureServiceCollection
    {
        public static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            services.AddScoped(typeof(IBaseRepository<>), typeof(BaseRepository<>));

            services.AddScoped<ICharacterRepository, CharacterRepository>();
            services.AddScoped<IDialogRepository, DialogRepository>();
            services.AddScoped<IQuestRepository, QuestRepository>();
            services.AddScoped<IStoryChapterRepository, StoryChapterRepository>();

            return services;
        }
    }
}
