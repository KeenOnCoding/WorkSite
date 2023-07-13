using Argon.Core.VacancyContext.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Argon.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VacancyController : ControllerBase
    {
        private readonly IMediator _mediator;

        public VacancyController(IMediator mediator)
        {
            (_mediator) = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllVacancies()
        {
            var result =  await _mediator.Send(new GetAllVacanciesQuery());
            return result == null ? BadRequest() : Ok(result);
        }
    }
}
