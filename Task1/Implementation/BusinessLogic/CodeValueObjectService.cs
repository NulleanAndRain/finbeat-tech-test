using BusinesLogicInterface;
using DataLayerInterface;
using Entities;

namespace BusinessLogic;

public class CodeValueObjectService : ICodeValueObjectService
{
	public ICodeValueObjectDao Dao { get; init; }

	public async Task<IEnumerable<CodeValueObject>> GetObjectsByFilter(CodeValueObjectFilter filter)
	{
		return await Dao.GetObjectsByFilter(filter);
	}

	public Task SaveNewObjects(Dictionary<int, string> objectsRaw)
	{
		throw new NotImplementedException();
	}
}
