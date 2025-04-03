using BusinesLogicInterface;
using Entities;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

public class CodeValueObjectController : Controller
{
	public ICodeValueObjectService Service { get; init; }

	public CodeValueObjectController(ICodeValueObjectService service)
	{
		Service = service;
	}

	[HttpGet]
	public async Task<ActionResult<IEnumerable<CodeValueObject>>> Get(CodeValueObjectFilter? filter)
	{
		var result = await Service.GetObjectsByFilter(filter ?? new());
		return Ok(result);
	}

	[HttpPost]
	public async Task<IActionResult> Post(Dictionary<int, string> objects)
	{
		await Service.SaveNewObjects(objects);
		return Ok();
	}
}
