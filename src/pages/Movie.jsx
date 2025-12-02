import { useParams } from 'react-router-dom';

function Movie() {
  const { id } = useParams();
  
  // More complete movie data
  const movies = {
    1: {
      title: "Doctor Strange",
      time: 115,
      genres: ["Action", "Adventure", "Fantasy"]
    },
    2: {
      title: "Trolls",
      time: 92,
      genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy", "Musical"]
    },
    3: {
      title: "Jack Reacher: Never Go Back",
      time: 118,
      genres: ["Action", "Adventure", "Crime", "Mystery", "Thriller"]
    },
    4: {
      title: "The Irishman",
      time: 209,
      genres: ["Biography", "Crime", "Drama"]
    },
    5: {
      title: "Gone Girl",
      time: 149,
      genres: ["Drama", "Mystery", "Thriller"]
    },
    6: {
      title: "The Boy",
      time: 97,
      genres: ["Horror", "Mystery", "Thriller"]
    }
  };
  
  const movie = movies[id] || { title: "Movie not found", time: 0, genres: [] };

  return (
    <div>
      <header>
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>Time: {movie.time}</p>
        <div>
          {movie.genres.map((genre, index) => (
            <span key={index} data-testid={`genre-${genre.toLowerCase()}`}>{genre} </span>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Movie;
