using Entities;

namespace BusinesLogicInterface;

public interface ICodeValueObjectService
{
	Task SaveNewObjects(Dictionary<int, string> objectsRaw);
	Task<IEnumerable<CodeValueObject>> GetObjectsByFilter(CodeValueObjectFilter filter);
}
