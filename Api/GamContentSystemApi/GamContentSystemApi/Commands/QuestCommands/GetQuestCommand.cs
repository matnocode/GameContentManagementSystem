using GamContentSystemApi.Database.Entities;
using GamContentSystemApi.Interfaces;
using MediatR;

namespace GamContentSystemApi.Commands.QuestCommands
{
    public class GetQuestCommand : IRequest<Quest>
    {
        public int Id { get; set; }
    }

    public class GetQuestCommandHandler : IRequestHandler<GetQuestCommand, Quest>
    {
        private readonly IQuestRepository questRepository;

        public GetQuestCommandHandler(IQuestRepository questRepository)
        {
            this.questRepository = questRepository;
        }

        public async Task<Quest> Handle(GetQuestCommand request, CancellationToken cancellationToken)
        {
            return await questRepository.GetAsync(request.Id, cancellationToken) ?? throw new Exception("Not found");
        }
    }
}
