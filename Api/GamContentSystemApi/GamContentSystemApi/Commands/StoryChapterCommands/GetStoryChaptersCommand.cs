using GamContentSystemApi.Database.Entities;
using GamContentSystemApi.Interfaces;
using MediatR;

namespace GamContentSystemApi.Commands.StoryChapterCommands
{
    public class GetStoryChaptersCommand : IRequest<List<StoryChapter>>
    {
    }

    public class GetStoryChaptersCommandHanlder : IRequestHandler<GetStoryChaptersCommand, List<StoryChapter>>
    {
        private readonly IStoryChapterRepository storyChapterRepository;

        public GetStoryChaptersCommandHanlder(IStoryChapterRepository storyChapterRepository)
        {
            this.storyChapterRepository = storyChapterRepository;
        }

        public async Task<List<StoryChapter>> Handle(GetStoryChaptersCommand request, CancellationToken cancellationToken)
        {
            return await storyChapterRepository.GetAllAsync(cancellationToken);
        }
    }
}
