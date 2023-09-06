using GamContentSystemApi.Database.Entities;
using GamContentSystemApi.Interfaces;
using MediatR;

namespace GamContentSystemApi.Commands.CharacterCommands
{
    public class GetCharacterCommand : IRequest<Character>
    {
        public int Id { get; set; }
    }

    public class GetCharacterCommandHandler : IRequestHandler<GetCharacterCommand, Character>
    {
        private readonly ICharacterRepository characterRepository;

        public GetCharacterCommandHandler(ICharacterRepository characterRepository)
        {
            this.characterRepository = characterRepository;
        }

        public async Task<Character> Handle(GetCharacterCommand request, CancellationToken cancellationToken)
        {
            return await characterRepository.GetAsync(request.Id, cancellationToken) ?? throw new Exception("Not found");
        }
    }
}
