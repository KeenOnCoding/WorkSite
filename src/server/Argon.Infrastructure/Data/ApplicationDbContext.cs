using Argon.Core.DTOs;
using Microsoft.EntityFrameworkCore;

namespace Argon.Infrastructure.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        public DbSet<VacancyDto> Vacancies { get; set; }
    }
}
