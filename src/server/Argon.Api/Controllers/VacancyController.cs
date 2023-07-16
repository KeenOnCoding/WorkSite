using Argon.Core.DTOs;
using Argon.Core.VacancyContext.Commands;
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

        [HttpGet("GetAllVacancies")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public async Task<IActionResult> GetAllVacanciesAsync()
        {
            var result =  await _mediator.Send(new GetAllVacanciesQuery());
            return result == null ? BadRequest() : Ok(result);
        }

        [HttpPost("CreateVacancy")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public async Task<IActionResult> CreateVacancyAsync(VacancyDto vacancy)
        {
            var result = await _mediator.Send(new CreateVacancyCommand()
            {
                Vacancy = new VacancyDto
                {
                    Title = vacancy.Title,
                    Description = vacancy.Description,
                    Wage = vacancy.Wage,
                    Company = vacancy.Company
                }
            });

            return Ok(result);
        }
    }
}
