using DataLayerInterface;
using Entities;

namespace InMemoryDataLayer;

public class InMemoryCodeValueObjectDao : ICodeValueObjectDao
{
	public Task<IEnumerable<CodeValueObject>> GetObjectsByFilter(CodeValueObjectFilter filter)
	{
		throw new NotImplementedException();
	}

	public Task SaveObjects(IEnumerable<CodeValueObject> objects)
	{
		throw new NotImplementedException();
	}
}
