namespace Argon.Infrastructure.VacancyContext
{
    using Argon.Core.DTOs;
    using Argon.Core.Entities;
    using AutoMapper;

    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<VacancyDto, Vacancy>(MemberList.Source);
            CreateMap<Vacancy, VacancyDto>(MemberList.Destination);
        }
    }
}
