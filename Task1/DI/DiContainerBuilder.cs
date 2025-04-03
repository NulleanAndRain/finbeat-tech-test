using BusinesLogicInterface;
using BusinessLogic;
using DataLayerInterface;
using InMemoryDataLayer;
using Microsoft.Extensions.DependencyInjection;

namespace DI;

public static class DiContainerBuilder
{
	public static IServiceCollection ConfigureDiContainer(this IServiceCollection services)
	{
		services.AddScoped<ICodeValueObjectService, CodeValueObjectService>();
		services.AddSingleton<ICodeValueObjectDao, InMemoryCodeValueObjectDao>();

		return services;
	}

}
