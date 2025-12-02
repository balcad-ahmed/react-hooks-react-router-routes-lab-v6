import { Link } from 'react-router-dom';

function Home() {
  const movies = [
    { id: 1, title: "Doctor Strange", time: 115 },
    { id: 2, title: "Trolls", time: 92 },
    { id: 3, title: "Jack Reacher: Never Go Back", time: 118 }
  ];

  return (
    <div>
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        {movies.map(movie => (
          <article key={movie.id}>
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.id}`}>View Info</Link>
          </article>
        ))}
      </main>
    </div>
  );
}

export default Home;
