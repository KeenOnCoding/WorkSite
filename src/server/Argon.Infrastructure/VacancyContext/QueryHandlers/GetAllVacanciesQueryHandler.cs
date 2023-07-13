namespace Argon.Infrastructure.VacancyContext.QueryHandlers
{
    using Argon.Core;
    using Argon.Core.DTOs;
    using Argon.Core.VacancyContext.Queries;
    using System.Threading;
    using System.Threading.Tasks;

    public class GetAllVacanciesQueryHandler : IQueryHandler<GetAllVacanciesQuery, IEnumerable<VacancyDto>>
    {
        public GetAllVacanciesQueryHandler()
        {
            
        }
        public async Task<IEnumerable<VacancyDto>> Handle(GetAllVacanciesQuery request, CancellationToken cancellationToken)
        {
            var result = new List<VacancyDto> {
                new VacancyDto(){
                    Id = 1,
                    Title = "Manager",
                    Wage = 3000,
                    Company = "Microsoft",
                    Description  = "Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth"
                }
            };
            return await Task.FromResult(result);
        }
    }
}
