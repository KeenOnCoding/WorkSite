namespace Argon.Infrastructure.VacancyContext.QueryHandlers
{
    using Argon.Core;
    using Argon.Core.DTOs;
    using Argon.Core.Entities;
    using Argon.Core.VacancyContext.Queries;
    using Argon.Infrastructure.Data;
    using AutoMapper;
    using MediatR;
    using Microsoft.EntityFrameworkCore;
    using System.Threading;
    using System.Threading.Tasks;

    public class GetAllVacanciesQueryHandler : IQueryHandler<GetAllVacanciesQuery, IEnumerable<Vacancy>>
    {
        private readonly ApplicationDbContext _context;
        private readonly IMediator _mediator;
        private readonly IMapper _mapper;

        public GetAllVacanciesQueryHandler(
            ApplicationDbContext context,
            IMediator mediator,
            IMapper mapper)
            => (_context, _mediator, _mapper) = (context, mediator, mapper);

        public async Task<IEnumerable<Vacancy>> Handle(GetAllVacanciesQuery request, CancellationToken cancellationToken)
        {
            return await _context.Vacancies.ToListAsync();
        }
    }
}
