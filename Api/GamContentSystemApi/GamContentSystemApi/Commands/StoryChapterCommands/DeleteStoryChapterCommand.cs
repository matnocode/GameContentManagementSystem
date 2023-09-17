using GamContentSystemApi.Interfaces;
using MediatR;

namespace GamContentSystemApi.Commands.StoryChapterCommands
{
    public class DeleteStoryChapterCommand : IRequest<Unit>
    {
        public int Id { get; set; }
    }

    public class DeleteStoryChapterCommandHandler : IRequestHandler<DeleteStoryChapterCommand, Unit>
    {
        private IStoryChapterRepository storyChapterRepository;

        public DeleteStoryChapterCommandHandler(IStoryChapterRepository storyChapterRepository)
        {
            this.storyChapterRepository = storyChapterRepository;
        }

        public Task<Unit> Handle(DeleteStoryChapterCommand request, CancellationToken cancellationToken)
        {
            //remove dependencies
            throw new NotImplementedException();
        }
    }
}
