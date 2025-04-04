using DataLayerInterface;
using Entities;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace EntityFrameworkDataLayer;

public class EfCodeValueObjectDao : ICodeValueObjectDao
{
	public CodeValueObjectContext DbContext { get; init; }

	public EfCodeValueObjectDao(CodeValueObjectContext dbContext)
	{
		DbContext = dbContext;
	}

	public async Task<IEnumerable<CodeValueObject>> GetObjectsByFilter(CodeValueObjectFilter filter)
	{
		var result = await DbContext.CodeValueObjects
			.AsNoTracking()
			.Where(x => filter.Id == null || x.Id == filter.Id)
			.Where(x => filter.Code == null || x.Code == filter.Code)
			.Where(x => filter.ValueIncluded == null || x.Value.Contains(filter.ValueIncluded))
			.Where(x => filter.ValueExact == null || x.Value.Equals(filter.ValueExact))
			.OrderBy(x => x.OrderNumber)
			.Skip((filter.Page - 1) * filter.ItemsPerPage)
			.Take(filter.ItemsPerPage)
			.ToListAsync();

		return result;
	}

	public async Task SaveObjects(IEnumerable<CodeValueObject> objects)
	{
		if (DbContext.CodeValueObjects.Any())
		{
#pragma warning disable EF1002 // Risk of vulnerability to SQL injection.
			await DbContext.Database.ExecuteSqlRawAsync($"TRUNCATE TABLE [dbo].[{CodeValueObjectContext.TableName}]");
#pragma warning restore EF1002 // Risk of vulnerability to SQL injection.
		}

		await DbContext.CodeValueObjects.AddRangeAsync(objects);

		await DbContext.SaveChangesAsync();
	}

	public async Task<int> GetItemsCountByFilter(CodeValueObjectFilter filter)
	{
		var result = await DbContext.CodeValueObjects
			.AsNoTracking()
			.Where(x => filter.Id == null || x.Id == filter.Id)
			.Where(x => filter.Code == null || x.Code == filter.Code)
			.Where(x => filter.ValueIncluded == null || x.Value.Contains(filter.ValueIncluded))
			.Where(x => filter.ValueExact == null || x.Value.Equals(filter.ValueExact))
			.CountAsync();

		return result;
	}
}
