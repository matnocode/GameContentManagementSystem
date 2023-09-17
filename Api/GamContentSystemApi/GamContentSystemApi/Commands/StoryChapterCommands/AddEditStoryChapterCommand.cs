using GamContentSystemApi.Database.Entities;
using GamContentSystemApi.Interfaces;
using MediatR;

namespace GamContentSystemApi.Commands.StoryChapterCommands
{
    public class AddEditStoryChapterCommand : IRequest<Unit>
    {
        public int? Id { get; set; }
        public string? Title { get; set; } = "NoTitle";
        public string? Content { get; set; }
        public string? Summary { get; set; }
    }

    public class AddEditStoryChapterCommandHandler : IRequestHandler<AddEditStoryChapterCommand, Unit>
    {
        private readonly IStoryChapterRepository storyChapterRepository;

        public AddEditStoryChapterCommandHandler(IStoryChapterRepository storyChapterRepository)
        {
            this.storyChapterRepository = storyChapterRepository;
        }

        public async Task<Unit> Handle(AddEditStoryChapterCommand request, CancellationToken cancellationToken)
        {
            if (!request.Id.HasValue)
            {
                await storyChapterRepository.AddAsync(new StoryChapter { Content = request.Content, Summary = request.Summary, Title = request.Title }, cancellationToken);
                return Unit.Value;
            }

            var entity = await storyChapterRepository.GetAsync(request.Id.Value, cancellationToken) ?? throw new BadHttpRequestException("Entity not found");

            entity.Title = request.Title;
            entity.Summary = request.Summary;
            entity.Content = request.Content;

            await storyChapterRepository.UpdateAsync(entity, cancellationToken);

            return Unit.Value;
        }
    }
}
