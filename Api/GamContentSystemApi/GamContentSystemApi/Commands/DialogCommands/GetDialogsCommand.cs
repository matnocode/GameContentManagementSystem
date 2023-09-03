using GamContentSystemApi.Database.Entities;
using GamContentSystemApi.Interfaces;
using MediatR;

namespace GamContentSystemApi.Commands.DialogCommands
{

    public class GetDialogsCommand : IRequest<List<Dialog>>
    {
    }

    public class GetDialogCommandHandler : IRequestHandler<GetDialogsCommand, List<Dialog>>
    {
        public IDialogRepository dialogRepository;

        public GetDialogCommandHandler(IDialogRepository dialogRepository)
        {
            this.dialogRepository = dialogRepository;
        }

        public async Task<List<Dialog>> Handle(GetDialogsCommand request, CancellationToken cancellationToken)
        {
            return await dialogRepository.GetAllAsync(cancellationToken);
        }
    }

}
