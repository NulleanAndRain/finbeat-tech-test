using Entities;

namespace DataLayerInterface;

public interface ICodeValueObjectDao
{
	Task SaveObjects(IEnumerable<CodeValueObject> objects);
	Task<IEnumerable<CodeValueObject>> GetObjectsByFilter(CodeValueObjectFilter filter);
	Task<int> GetItemsCountByFilter(CodeValueObjectFilter filter);
}
