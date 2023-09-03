using GamContentSystemApi.Database.Entities;
using GamContentSystemApi.Interfaces;
using MediatR;

namespace GamContentSystemApi.Commands.CharacterCommands
{
    public class GetCharactersCommand : IRequest<List<Character>>
    {
    }

    public class GetCharactersCommandHandler : IRequestHandler<GetCharactersCommand, List<Character>>
    {
        public ICharacterRepository characterRepository;

        public GetCharactersCommandHandler(ICharacterRepository characterRepository)
        {
            this.characterRepository = characterRepository;
        }

        public async Task<List<Character>> Handle(GetCharactersCommand request, CancellationToken cancellationToken)
        {
            return await characterRepository.GetAllAsync(cancellationToken);
        }
    }
}
