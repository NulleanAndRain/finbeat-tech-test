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
	public async Task<ActionResult<IEnumerable<CodeValueObject>>> Get([FromQuery] CodeValueObjectFilter? filter)
	{
		var result = await Service.GetObjectsByFilter(filter ?? new());
		return Ok(result);
	}

	[HttpPost("")]
	public async Task<IActionResult> Post([FromBody] Dictionary<int, string> objects)
	{
		await Service.SaveNewObjects(objects);
		return Ok();
	}
}
