namespace Argon.Core.VacancyContext.Queries
{
    using Argon.Core.DTOs;
    using Argon.Domain.Entities;
    public class GetAllVacanciesQuery : IQuery<IEnumerable<VacancyDto>>
    {
        public IEnumerable<Vacancy>? Vacancies { get; set; }
    }
}
