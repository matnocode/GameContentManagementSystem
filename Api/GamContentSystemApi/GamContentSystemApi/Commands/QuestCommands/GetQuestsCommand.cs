using GamContentSystemApi.Database.Entities;
using GamContentSystemApi.Interfaces;
using MediatR;

namespace GamContentSystemApi.Commands.QuestCommands
{
    public class GetQuestsCommand : IRequest<List<Quest>>
    {
    }

    public class GetQuestsCommandHandler : IRequestHandler<GetQuestsCommand, List<Quest>>
    {
        public IQuestRepository questRepository;

        public GetQuestsCommandHandler(IQuestRepository questRepository)
        {
            this.questRepository = questRepository;
        }

        public async Task<List<Quest>> Handle(GetQuestsCommand request, CancellationToken cancellationToken)
        {
            return await questRepository.GetAllAsync(cancellationToken);
        }
    }
}
