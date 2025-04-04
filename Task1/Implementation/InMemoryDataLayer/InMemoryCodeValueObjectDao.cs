using DataLayerInterface;
using Entities;

namespace InMemoryDataLayer;

public class InMemoryCodeValueObjectDao : ICodeValueObjectDao
{
	private readonly List<CodeValueObject> _dataset = new();

	public Task<int> GetItemsCountByFilter(CodeValueObjectFilter filter)
	{
		var result = _dataset
			.Where(x => filter.Id == null || x.Id == filter.Id)
			.Where(x => filter.Code == null || x.Code == filter.Code)
			.Where(x => filter.ValueIncluded == null || x.Value.Contains(filter.ValueIncluded))
			.Where(x => filter.ValueExact == null || x.Value.Equals(filter.ValueExact))
			.Count();

		return Task.FromResult(result);
	}

	public async Task<IEnumerable<CodeValueObject>> GetObjectsByFilter(CodeValueObjectFilter filter)
	{
		var result = _dataset
			.Where(x => filter.Id == null || x.Id == filter.Id)
			.Where(x => filter.Code == null || x.Code == filter.Code)
			.Where(x => filter.ValueIncluded == null || x.Value.Contains(filter.ValueIncluded))
			.Where(x => filter.ValueExact == null || x.Value.Equals(filter.ValueExact))
			.OrderBy(x => x.OrderNumber)
			.ToList();

		return await Task.FromResult(result);
	}

	public Task SaveObjects(IEnumerable<CodeValueObject> objects)
	{
		_dataset.Clear();
		_dataset.AddRange(objects);
		return Task.CompletedTask;
	}
}
