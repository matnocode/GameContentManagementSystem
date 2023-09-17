using GamContentSystemApi.Database.Entities;
using GamContentSystemApi.Interfaces;
using MediatR;

namespace GamContentSystemApi.Commands.QuestCommands
{
    public class AddEditQuestCommand : IRequest<Unit> { 
    
        public int? Id { get; set; }
        public string? Name { get; set; }
        public QuestType QuestType { get; set; }
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
            if (!request.Id.HasValue)
                await questRepository.AddAsync(new Quest { QuestType = request.QuestType, Name = request.Name }, cancellationToken);
            else
            {
                var character = await questRepository.GetAsync(request.Id.Value, cancellationToken) ?? throw new BadHttpRequestException("entity not found");
                character.QuestType = request.QuestType;
                character.Name = request.Name;
                await questRepository.UpdateAsync(character, cancellationToken);
            }
            return Unit.Value;
        }
    }
}
