using GamContentSystemApi.Commands.CharacterCommands;
using GamContentSystemApi.Commands.DialogCommands;
using GamContentSystemApi.Commands.QuestCommands;
using Microsoft.AspNetCore.Mvc;

namespace GamContentSystemApi.Controllers
{
    public class DataController : ApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetCharacters([FromRoute] GetCharactersCommand command) => await SendCommand(command);
        [HttpGet]
        public async Task<IActionResult> GetCharacter([FromQuery] GetCharacterCommand command) => await SendCommand(command);
        [HttpGet]
        public async Task<IActionResult> GetQuests([FromRoute] GetQuestsCommand command) => await SendCommand(command);
        [HttpGet]
        public async Task<IActionResult> GetQuest([FromQuery] GetQuestCommand command) => await SendCommand(command);
        [HttpGet]
        public async Task<IActionResult> GetDialogs([FromRoute] GetDialogsCommand command) => await SendCommand(command);

        [HttpPost]
        public async Task<IActionResult> AddCharacter([FromBody] AddCharacterCommand command) => await SendCommand(command);
        [HttpPost]
        public async Task<IActionResult> AddEditQuest([FromBody] AddEditQuestCommand command) => await SendCommand(command);

        [HttpDelete]
        public async Task<IActionResult> DeleteCharacter([FromQuery] DeleteCharacterCommand command) => await SendCommand(command);
    }
}
