using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using FileIO = System.IO.File;

namespace Api.Controllers;

public class HomeController : Controller
{
	public string? IndexFileCache { get; set; }

	private const int _cacheDuration = 24 * 60 * 60; // 1 day

	[HttpGet("/")]
	[ResponseCache(Duration = _cacheDuration)]
	public async Task<IActionResult> Index()
	{
		var fileContent = IndexFileCache ??= (await FileIO.ReadAllTextAsync("./Static/index.html"));
		return Content(fileContent, "text/html");
	}
}
