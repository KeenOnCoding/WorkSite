using Argon.Core;
using Argon.Core.VacancyContext.Commands;
using Argon.Infrastructure.Data;
using MediatR;

namespace Argon.Infrastructure.VacancyContext.CommandHandlers
{
    public class CreateVacancyCommandHandler : ICommandHandler<CreateVacancyCommand, Unit>
    {
        private readonly ApplicationDbContext _context;
        private readonly IMediator _mediator;

        public CreateVacancyCommandHandler(
            ApplicationDbContext context, 
            IMediator mediator)
            => (_context, _mediator) = (context, mediator);

        public async Task<Unit> Handle(CreateVacancyCommand request, CancellationToken cancellationToken)
        {
            await _context.Vacancies.AddAsync(request.Vacancy);

            await _context.SaveChangesAsync();
         
            return Unit.Value;
        }
    }
}
