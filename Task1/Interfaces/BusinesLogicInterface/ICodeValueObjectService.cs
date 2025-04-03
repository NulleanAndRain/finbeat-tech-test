using Entities;

namespace BusinesLogicInterface;

public interface ICodeValueObjectService
{
	Task SaveNewObjects(IEnumerable<KeyValuePair<int, string>> objectsRaw);
	Task<IEnumerable<CodeValueObject>> GetObjectsByFilter(CodeValueObjectFilter filter);
}
