using System.ComponentModel.DataAnnotations;

namespace Entities;

public class CodeValueObject
{
	[Required]
	public Guid Id { get; init; } = Guid.NewGuid();
	
	[Required]
	public int Code { get; set; }
	
	[Required]
	public string Value { get; set; }

	[Required]
	public int OrderNumber { get; set; }
}
