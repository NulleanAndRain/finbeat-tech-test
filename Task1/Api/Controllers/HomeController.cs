using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

public class HomeController : Controller
{
	[HttpGet("/")]
	public IActionResult Index()
	{
		return Ok("ъеъ");
	}
}
