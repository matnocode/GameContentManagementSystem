using GamContentSystemApi.Database.Entities;
using GamContentSystemApi.Interfaces;
using MediatR;

namespace GamContentSystemApi.Commands.StoryChapterCommands
{
    public class GetStoryChapterCommand : IRequest<StoryChapter>
    {
        public int Id { get; set; }
    }

    public class GetStoryChapterCommandHanlder : IRequestHandler<GetStoryChapterCommand, StoryChapter>
    {
        private readonly IStoryChapterRepository storyChapterRepository;

        public GetStoryChapterCommandHanlder(IStoryChapterRepository storyChapterRepository)
        {
            this.storyChapterRepository = storyChapterRepository;
        }

        public async Task<StoryChapter> Handle(GetStoryChapterCommand request, CancellationToken cancellationToken)
        {
            return await storyChapterRepository.GetAsync(request.Id, cancellationToken) ?? throw new Exception("Enity not found");
        }
    }
}
