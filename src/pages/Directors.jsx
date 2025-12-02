function Directors() {
  const directors = [
    { 
      name: "Scott Derrickson", 
      movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"] 
    },
    { 
      name: "Mike Mitchell", 
      movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"] 
    },
    { 
      name: "Edward Zwick", 
      movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Last Samurai", "The Siege"] 
    },
    { 
      name: "John McTiernan", 
      movies: ["Predator", "Die Hard", "The Hunt for Red October"] 
    },
    { 
      name: "Rob Reiner", 
      movies: ["A Few Good Men", "Misery", "The American President"] 
    },
    { 
      name: "Quentin Tarantino", 
      movies: ["Reservoir Dogs", "Pulp Fiction", "Inglourious Basterds"] 
    },
    { 
      name: "Mike Nichols", 
      movies: ["The Graduate", "Charlie Wilson's War", "Working Girl"] 
    }
  ];

  return (
    <div>
      <header>
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.map((director, index) => (
          <article key={index}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, idx) => (
                <li key={idx}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </div>
  );
}

export default Directors;
