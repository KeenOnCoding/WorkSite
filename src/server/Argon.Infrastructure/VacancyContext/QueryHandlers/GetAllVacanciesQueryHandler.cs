namespace Argon.Infrastructure.VacancyContext.QueryHandlers
{
    using Argon.Core;
    using Argon.Core.DTOs;
    using Argon.Core.VacancyContext.Queries;
    using Argon.Infrastructure.Data;
    using MediatR;
    using Microsoft.EntityFrameworkCore;
    using System.Threading;
    using System.Threading.Tasks;

    public class GetAllVacanciesQueryHandler : IQueryHandler<GetAllVacanciesQuery, IEnumerable<VacancyDto>>
    {
        private readonly ApplicationDbContext _context;
        private readonly IMediator _mediator;

        public GetAllVacanciesQueryHandler(
            ApplicationDbContext context,
            IMediator mediator)
            => (_context, _mediator) = (context, mediator);

        public async Task<IEnumerable<VacancyDto>> Handle(GetAllVacanciesQuery request, CancellationToken cancellationToken)
        {
            return await _context.Vacancies.ToListAsync();
        }
    }
}
