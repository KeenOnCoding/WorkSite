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
                },
                 new VacancyDto(){
                    Id = 2,
                    Title = "Plumber",
                    Wage = 3000,
                    Company = "Microsoft",
                    Description  = "Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth"
                },
                  new VacancyDto(){
                    Id = 3,
                    Title = "Developer",
                    Wage = 3000,
                    Company = "Microsoft",
                    Description  = "Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth"
                },
                   new VacancyDto(){
                    Id = 4,
                    Title = "Doctor",
                    Wage = 3000,
                    Company = "Microsoft",
                    Description  = "Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth"
                },
                    new VacancyDto(){
                    Id =5,
                    Title = "Director",
                    Wage = 3000,
                    Company = "Microsoft",
                    Description  = "Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth"
                },
                     new VacancyDto(){
                    Id = 6,
                    Title = "CEO",
                    Wage = 3000,
                    Company = "Microsoft",
                    Description  = "Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth"
                },
                      new VacancyDto(){
                    Id = 7,
                    Title = "Architect",
                    Wage = 3000,
                    Company = "Microsoft",
                    Description  = "Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth"
                },
                       new VacancyDto(){
                    Id = 8,
                    Title = "DevOps",
                    Wage = 3000,
                    Company = "Microsoft",
                    Description  = "Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth"
                },
                        new VacancyDto(){
                    Id = 9,
                    Title = "&",
                    Wage = 3000,
                    Company = "Microsoft",
                    Description  = "Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth"
                },
                         new VacancyDto(){
                    Id = 10,
                    Title = "Tester",
                    Wage = 3000,
                    Company = "Microsoft",
                    Description  = "Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth"
                }
            };
            return await Task.FromResult(result);
        }
    }
}
