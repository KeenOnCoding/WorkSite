namespace Argon.Core.VacancyContext.Queries
{
    using Argon.Core.DTOs;
    using Argon.Core.Entities;

    public class GetAllVacanciesQuery : IQuery<IEnumerable<Vacancy>>
    {
        public IEnumerable<Vacancy>? Vacancies { get; set; }
    }
}
