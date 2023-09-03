using GamContentSystemApi.Configuration;
using GamContentSystemApi.Database;
using Microsoft.EntityFrameworkCore;

namespace GamContentSystemApi
{
    public class Startup
    {
        IConfiguration configuration;

        public Startup(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<GcsDbContext>(options => { options.UseSqlServer(configuration.GetConnectionString("GcsDatabase")); });
            services.AddMediatR(x => x.RegisterServicesFromAssembly(System.Reflection.Assembly.GetExecutingAssembly()));
            services.AddCors(x => x.AddDefaultPolicy(policy => policy
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowAnyOrigin()));
            
            services.AddControllers();

            services.AddRepositories();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors();
            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseEndpoints(endpoints => endpoints.MapControllers());
        }
    }
}
