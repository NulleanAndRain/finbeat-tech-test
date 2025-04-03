using BusinesLogicInterface;
using Entities;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[Route("api/[controller]/")]
public class CodeValueObjectsController : Controller
{
	public ICodeValueObjectService Service { get; init; }

	public CodeValueObjectsController(ICodeValueObjectService service)
	{
		Service = service;
	}

	[HttpGet("")]
	public async Task<ActionResult<IEnumerable<CodeValueObject>>> Get([FromQuery] CodeValueObjectFilter filter)
	{
		var result = await Service.GetObjectsByFilter(filter);
		return Ok(result);
	}

	[HttpPost("")]
	public async Task<IActionResult> Post([FromBody] List<Dictionary<int, string>> objects)
	{
		if (objects == null || !objects.Any()) {
			return BadRequest("Request does not contain objects for saving");
		}

		var flatten = objects
			.SelectMany(o => o.ToList())
			.ToList();

		await Service.SaveNewObjects(flatten);
		return Ok();
	}
}
