using GamContentSystemApi.Database.Entities;
using GamContentSystemApi.Interfaces;
using MediatR;

namespace GamContentSystemApi.Commands.CharacterCommands
{
    public class AddCharacterCommand : IRequest<Unit>
    {
        public string? Name;
        public string? IconUrl;
    }

    public class AddCharacterCommandHandler : IRequestHandler<AddCharacterCommand, Unit>
    {
        private readonly ICharacterRepository characterRepository;

        public AddCharacterCommandHandler(ICharacterRepository characterRepository)
        {
            this.characterRepository = characterRepository;
        }

        public async Task<Unit> Handle(AddCharacterCommand request, CancellationToken cancellationToken)
        {
            await characterRepository.AddAsync(new Character { IconUrl = request.IconUrl, Name = request.Name }, cancellationToken);
            return Unit.Value;
        }
    }
}
