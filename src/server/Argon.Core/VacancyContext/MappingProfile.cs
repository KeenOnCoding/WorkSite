using Argon.Domain.Entities;
using Argon.Domain.Views;
using AutoMapper;

namespace Argon.Core.VacancyContext
{

    internal class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<VacancyView, Argon.Domain.Entities.Vacancy>(MemberList.Source);
            CreateMap<Argon.Domain.Entities.Vacancy, VacancyView>(MemberList.Destination);

            //CreateMap<MediatorWebApp.Core., MediatorWebApp.Core.>(MemberList.Destination);
        }
    }
}
