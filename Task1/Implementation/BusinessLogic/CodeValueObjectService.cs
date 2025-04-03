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

	public async Task SaveNewObjects(Dictionary<int, string> objectsRaw)
	{
		var objectsToSave = objectsRaw.Select(keyval => new CodeValueObject
		{
			Code = keyval.Key,
			Value = keyval.Value,
		})
			.OrderBy(x => x.Code)
			.ToList();

		await Dao.SaveObjects(objectsToSave);
	}
}
