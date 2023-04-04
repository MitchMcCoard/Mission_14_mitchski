import { useState } from 'react';
import data from '../../MovieData.json';

const MovieData = data.MovieData;

function MovieList() {
  const [listOfMovies, setListOfMovies] = useState(MovieData);
  const addMovie = () => {
    setListOfMovies([
      ...MovieData,
      {
        Category: 'Action',
        Director: 'me',
        Year: 1992,
        Rating: 'pg',
        Title: 'The Best Ever',
        Edited: 'false',
      },
    ]);
  };

  return (
    <>
      <div>
        <h2>Joel Hilton's Movie Collection</h2>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
            </tr>
          </thead>

          <tbody>
            {/* Use parenthesis, not brackets!! Or in the same line:) see here for more details: https://stackoverflow.com/questions/72503672/react-typescript-this-jsx-tags-children-prop-expects-a-single-child-of-type
          {MovieData.map<any>((m) => {
            <tr>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Category}</td>
            </tr>;
          })} */}
            {listOfMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default MovieList;
