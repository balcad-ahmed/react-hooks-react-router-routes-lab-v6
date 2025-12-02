function Actors() {
  const actors = [
    { 
      name: "Benedict Cumberbatch", 
      movies: ["Doctor Strange", "The Imitation Game", "Black Mass"] 
    },
    { 
      name: "Justin Timberlake", 
      movies: ["Trolls", "Friends with Benefits", "The Social Network"] 
    },
    { 
      name: "Anna Kendrick", 
      movies: ["Pitch Perfect", "Into The Wood"] 
    },
    { 
      name: "Tom Cruise", 
      movies: ["Jack Reacher: Never Go Back", "Mission Impossible 4", "War of the Worlds"] 
    },
    { 
      name: "Reese Witherspoon", 
      movies: ["Legally Blonde", "Walk the Line", "Sing"] 
    },
    { 
      name: "Bruce Willis", 
      movies: ["Die Hard", "The Sixth Sense", "Pulp Fiction"] 
    },
    { 
      name: "Scarlett Johansson", 
      movies: ["Lost in Translation", "The Avengers", "Her"] 
    },
    { 
      name: "Emma Stone", 
      movies: ["La La Land", "Easy A", "The Help"] 
    }
  ];

  return (
    <div>
      <header>
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.map((actor, index) => (
          <article key={index}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, idx) => (
                <li key={idx}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </div>
  );
}

export default Actors;
