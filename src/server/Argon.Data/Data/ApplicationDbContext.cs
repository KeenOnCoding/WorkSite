namespace Argon.Data
{
    using Argon.Core.Entities;
    using Microsoft.EntityFrameworkCore;
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        public DbSet<Vacancy> Vacancies { get; set; }
    }
}
