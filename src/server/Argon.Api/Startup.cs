using Argon.Data;
using EFCoreSecondLevelCacheInterceptor;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        var connectionString = Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");

        services.AddDbContextPool<ApplicationDbContext>((serviceProvider, options) =>
        {
            options.UseSqlServer(connectionString, x =>
            x.MigrationsAssembly("Argon.Infrastructure"))
                .AddInterceptors(serviceProvider.GetRequiredService<SecondLevelCacheInterceptor>());
        });

        services.AddEFSecondLevelCache(options =>
        {
            options.UseMemoryCacheProvider()
                .DisableLogging(true)
                .UseCacheKeyPrefix("EF_");
            //  To cache all queries  https://github.com/VahidN/EFCoreSecondLevelCacheInterceptor
            options.CacheAllQueries(CacheExpirationMode.Absolute, TimeSpan.FromMinutes(30));
        });

        services.AddAutoMapper(Assembly.Load("Argon.Infrastructure"));

        services.AddMediatR(Assembly.Load("Argon.Infrastructure"));

        services.AddControllers();

        services.AddEndpointsApiExplorer();

        services.AddCors(options =>
                options.AddPolicy("AllowAll", builder => builder
                        .WithOrigins("http://192.168.0.105:4200")
                        .AllowAnyMethod()
                        .AllowAnyHeader()));

        services.AddSwaggerGen();
    }
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IHostApplicationLifetime lifetime) 
    {
        
        if (env.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseRouting();

        app.UseHttpsRedirection();

        app.UseCors("AllowAll");

        app.UseAuthorization();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });

        app.MigrateDatabase();
    }
}
public static class MigrationManager
{
    public static IApplicationBuilder MigrateDatabase(this IApplicationBuilder webApp)
    {
        using (var scope = webApp.ApplicationServices.CreateScope())
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

