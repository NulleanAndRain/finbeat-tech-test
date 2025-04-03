using BusinesLogicInterface;
using BusinessLogic;
using DataLayerInterface;
using EntityFrameworkDataLayer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;

namespace DI;

public static class DiContainerBuilder
{
	public static IServiceCollection ConfigureDiContainer(this IServiceCollection services, IConfigurationManager configurationManager)
	{
		services.AddScoped<ICodeValueObjectService, CodeValueObjectService>();
		services.AddScoped<ICodeValueObjectDao, EfCodeValueObjectDao>();

		services.AddDbContext<CodeValueObjectContext>(options =>
		{
			var connectionString = configurationManager.GetConnectionString("CodeValueDatabase");
			options.UseSqlServer(connectionString);
		});

		return services;
	}

}
