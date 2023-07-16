namespace Argon.Core.VacancyContext.Commands
{
    using Argon.Core.DTOs;
    using MediatR;

    public class CreateVacancyCommand : ICommand<Unit>
    {
        public VacancyDto? Vacancy { get; set; }
    }
}
