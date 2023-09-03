using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace GamContentSystemApi.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class ApiController : ControllerBase
    {
        protected IMediator Mediator { get => HttpContext.RequestServices.GetRequiredService<IMediator>(); }

        protected async Task<IActionResult> SendCommand<TResponse>(IRequest<TResponse> request)
        {
            try
            {
                var results = await Mediator.Send(request);

                return Ok(results);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}