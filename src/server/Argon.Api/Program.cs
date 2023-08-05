using Microsoft.AspNetCore;

public class Program
{
    public static async Task Main(string[] args)
    {
        await CreateWebHostBuilder(args).Build().RunAsync();
    }

    public static IWebHostBuilder CreateWebHostBuilder(string[] args)
    {
        return WebHost.CreateDefaultBuilder(args)
            .UseStartup<Startup>();
    }
}
