namespace Argon.Core.VacancyContext
{
    using Argon.Core.DTOs;
    using Argon.Domain.Entities;
    using AutoMapper;

    internal class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<VacancyDto, Vacancy>(MemberList.Source);
            CreateMap<Vacancy, VacancyDto>(MemberList.Destination);
        }
    }
}
