using GamContentSystemApi.Database.Entities;
using GamContentSystemApi.Interfaces;
using MediatR;

namespace GamContentSystemApi.Commands.QuestCommands
{
    public class AddEditQuestCommand : IRequest<Unit>
    {
        public int? StoryChapterId { get; set; }
        public int? Id { get; set; }
        public string Title { get; set; } = "";
    }

    public class AddEditQuestHandler : IRequestHandler<AddEditQuestCommand, Unit>
    {
        private readonly IQuestRepository questRepository;

        public AddEditQuestHandler(IQuestRepository questRepository)
        {
            this.questRepository = questRepository;
        }

        public async Task<Unit> Handle(AddEditQuestCommand request, CancellationToken cancellationToken)
        {
            if (request.StoryChapterId == null)
                throw new BadHttpRequestException("StoryChapterId must have value");

            if (!request.Id.HasValue)
                await questRepository.AddAsync(new Quest { Title = request.Title, StoryChapterId = request.StoryChapterId }, cancellationToken);
            else
            {
                var character = await questRepository.GetAsync(request.Id.Value, cancellationToken) ?? throw new BadHttpRequestException("entity not found");
                character.Title = request.Title;
                await questRepository.UpdateAsync(character, cancellationToken);
            }
            return Unit.Value;
        }
    }
}
