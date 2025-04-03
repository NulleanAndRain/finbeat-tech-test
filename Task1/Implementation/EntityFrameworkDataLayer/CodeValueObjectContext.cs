using Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Protocols;

namespace EntityFrameworkDataLayer;

public class CodeValueObjectContext : DbContext
{
	public static readonly string TableName = "CodeValueObjects";
	public DbSet<CodeValueObject> CodeValueObjects { get; init; }

	public CodeValueObjectContext(DbContextOptions options) : base(options) { }
}
