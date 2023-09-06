using GamContentSystemApi.Database.Entities;
using GamContentSystemApi.Interfaces;
using MediatR;

namespace GamContentSystemApi.Commands.CharacterCommands
{
    public class AddCharacterCommand : IRequest<Unit>
    {
        public string? Name { get; set; }
        public string? IconUrl { get; set; }
        public int? Id { get; set; }
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
            if (!request.Id.HasValue)
                await characterRepository.AddAsync(new Character { IconUrl = request.IconUrl, Name = request.Name }, cancellationToken);
            else
            {
                var character = await characterRepository.GetAsync(request.Id.Value, cancellationToken) ?? throw new BadHttpRequestException("entity not found");
                character.IconUrl = request.IconUrl;
                character.Name = request.Name;
                await characterRepository.UpdateAsync(character, cancellationToken);
            }
            return Unit.Value;
        }
    }
}
