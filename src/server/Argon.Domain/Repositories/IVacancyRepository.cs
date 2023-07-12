namespace Argon.Domain.Repositories
{
    using Argon.Domain.Entities;

    public interface IVacancyRepository
    {
        Task<Vacancy> GetAllVacanciesAsync();
    }
}
