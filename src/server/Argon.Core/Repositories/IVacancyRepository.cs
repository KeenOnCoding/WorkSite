namespace Argon.Core.Repositories
{
    using Argon.Core.Entities;
    public interface IVacancyRepository
    {
        Task<Vacancy> GetAllVacanciesAsync();
    }
}
