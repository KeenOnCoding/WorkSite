using Argon.Infrastructure;
using Argon.Infrastructure.Data;
using Argon.Infrastructure.VacancyContext;
using EFCoreSecondLevelCacheInterceptor;
using MediatR;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");

builder.Services.AddDbContextPool<ApplicationDbContext>((serviceProvider, options) =>
{
    options.UseSqlServer(connectionString, x => 
    x.MigrationsAssembly("Argon.Infrastructure"))
        .AddInterceptors(serviceProvider.GetRequiredService<SecondLevelCacheInterceptor>());
});

builder.Services.AddEFSecondLevelCache(options => {
    options.UseMemoryCacheProvider()
        .DisableLogging(true)
        .UseCacheKeyPrefix("EF_");
    //  To cache all queries  https://github.com/VahidN/EFCoreSecondLevelCacheInterceptor
    options.CacheAllQueries(CacheExpirationMode.Absolute, TimeSpan.FromMinutes(30));
});

builder.Services.AddAutoMapper(typeof(MappingProfile).Assembly);

builder.Services.AddMediatR(typeof(IHandler).Assembly);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddCors(options =>
        options.AddPolicy("AllowAll",builder => builder
                .WithOrigins("http://192.168.0.105:4200")
                .AllowAnyMethod()
                .AllowAnyHeader()));

builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.MigrateDatabase();

app.Run();

public static class MigrationManager
{
    public static WebApplication MigrateDatabase(this WebApplication webApp)
    {
        using (var scope = webApp.Services.CreateScope())
        {
            using (var appContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>())
            {
                try
                {
                    if (!appContext.Vacancies.Any())
                    {
                        appContext.Database.Migrate();
                    }

                }
                catch (Exception)
                {
                    throw;
                }
            }
        }
        return webApp;
    }
}
