using Microsoft.EntityFrameworkCore;

namespace Mission_14_api_mitchski.Models
{
    public class MovieDbContext : DbContext
    {
        public MovieDbContext(DbContextOptions<MovieDbContext> options) : base(options) { }

        public DbSet<Movie> Movies { get; set;}

    }
}
