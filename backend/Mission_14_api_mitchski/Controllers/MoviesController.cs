using Microsoft.AspNetCore.Mvc;
using Mission_14_api_mitchski.Models;
using System.Security.Cryptography.X509Certificates;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Mission_14_api_mitchski.Controllers   /////// I tried this one
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        public MovieDbContext context;

        public MoviesController(MovieDbContext temp) {
            context = temp;
        }

        // GET: api/<MoviesController>
        [HttpGet]
        public IEnumerable<Movie> Get()
        {
            var editedMovies = context.Movies
                .Where(x => x.Edited.ToLower() == "Yes".ToLower())
                .OrderBy(x => x.Title)
                .ToArray();
            //var editedMovies = context.Movies.ToArray();
            return editedMovies;
        }

        // GET api/<MoviesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<MoviesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<MoviesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<MoviesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
