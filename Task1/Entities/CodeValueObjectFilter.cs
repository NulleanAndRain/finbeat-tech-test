namespace Entities;

public class CodeValueObjectFilter
{
	public Guid? Id { get; set; }
	public int? Code { get; set; }
	public string? ValueExact { get; set; }
	public string? ValueIncluded { get; set; }
}
