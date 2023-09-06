using GamContentSystemApi.Interfaces;
using MediatR;

namespace GamContentSystemApi.Commands.CharacterCommands
{
    public class DeleteCharacterCommand : IRequest<Unit>
    {
        public int Id { get; set; }
    }

    public class DeleteCharacterCommandHandler : IRequestHandler<DeleteCharacterCommand, Unit>
    {
        private readonly ICharacterRepository characterRepository;

        public DeleteCharacterCommandHandler(ICharacterRepository characterRepository)
        {
            this.characterRepository = characterRepository;
        }

        public async Task<Unit> Handle(DeleteCharacterCommand request, CancellationToken cancellationToken)
        {
            await characterRepository.RemoveAsync(request.Id, cancellationToken);
            return Unit.Value;
        }
    }
}
