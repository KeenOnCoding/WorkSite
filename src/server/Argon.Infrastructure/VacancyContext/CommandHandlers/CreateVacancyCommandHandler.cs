using Argon.Core;
using Argon.Core.DTOs;
using Argon.Core.Entities;
using Argon.Core.VacancyContext.Commands;
using Argon.Infrastructure.Data;
using AutoMapper;
using MediatR;

namespace Argon.Infrastructure.VacancyContext.CommandHandlers
{
    public class CreateVacancyCommandHandler : ICommandHandler<CreateVacancyCommand, Unit>
    {
        private readonly ApplicationDbContext _context;
        private readonly IMediator _mediator;
        private readonly IMapper _mapper;

        public CreateVacancyCommandHandler(
            ApplicationDbContext context, 
            IMediator mediator,
            IMapper mapper)
            => (_context, _mediator, _mapper) = (context, mediator, mapper);

        public async Task<Unit> Handle(CreateVacancyCommand request, CancellationToken cancellationToken)
        {
            var map = _mapper.Map<Vacancy>(request.Vacancy);

            await _context.Vacancies.AddAsync(map);

            await _context.SaveChangesAsync();
         
            return Unit.Value;
        }
    }
}
