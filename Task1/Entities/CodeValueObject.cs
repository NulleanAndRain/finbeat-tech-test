namespace Entities;

public class CodeValueObject
{
	public Guid Id { get; init; } = Guid.NewGuid();
	public int Code { get; set; }
	public string Value { get; set; }
}
