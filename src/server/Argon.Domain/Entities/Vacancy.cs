namespace Argon.Domain.Entities
{
    public class Vacancy
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public int Wage { get; set; }
        public string? Company { get; set; }
        public string? Description { get; set; }
    }
}
