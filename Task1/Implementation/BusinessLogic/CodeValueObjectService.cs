using BusinesLogicInterface;
using DataLayerInterface;
using Entities;

namespace BusinessLogic;

public class CodeValueObjectService : ICodeValueObjectService
{
	public ICodeValueObjectDao Dao { get; init; }

	public CodeValueObjectService(ICodeValueObjectDao dao)
	{
		Dao = dao;
	}

	public async Task<IEnumerable<CodeValueObject>> GetObjectsByFilter(CodeValueObjectFilter filter)
	{
		return await Dao.GetObjectsByFilter(filter);
	}

	public async Task SaveNewObjects(IEnumerable<KeyValuePair<int, string>> objectsRaw)
	{
		var objectsToSave = objectsRaw
			.OrderBy(x => x.Key)
			.Zip(Enumerable.Range(1, objectsRaw.Count()), 
			(keyval, order) =>
			new CodeValueObject
			{
				Code = keyval.Key,
				Value = keyval.Value,
				OrderNumber = order,
			})
			.ToList();

		await Dao.SaveObjects(objectsToSave);
	}
}
