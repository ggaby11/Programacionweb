import { useState, useEffect } from "react";

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

//para la descripcion
const SPECIES_URL = "https://pokeapi.co/api/v2/pokemon-species/";

export default function Home() {
  const [poke, setPokemon] = useState(null);
  const [id, setId] = useState(1);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchPokemon(id);
  }, [id]);

  const fetchPokemon = async (pokeId) => {
    setError(false);
    setPokemon(null);

    try {
      const res = await fetch(`${API_URL}${pokeId}`);
      if (!res.ok) throw new Error(); 

      const data = await res.json();
      const speciesRes = await fetch(`${SPECIES_URL}${pokeId}`);
      const speciesData = await speciesRes.json();

      setPokemon({
        name: data.name,
        img: data.sprites.front_default,
        description: speciesData.flavor_text_entries
          .find((entry) => entry.language.name === "es")
          .flavor_text.replace(/[\n\f]/g, " ")
      });
    } catch {
      setError(true);
      setPokemon(null);
    }
  };

  return (
    <div className="container">
      {error ? (
        <p className="error-message">No hay más ._.</p> //el boton se desabilita si ya no hay mas pokemones en la lista esdecir si el id ya es 1
      ) : poke ? (
        <div className="card">
          <img className="poke-img" src={poke.img} alt={poke.name} />
          <div className="controls">
            <button onClick={() => setId(id - 1)} disabled={id <= 1}>◀</button>
            <h1>{poke.name}</h1>
            <button onClick={() => setId(id + 1)}>▶</button>
          </div>
          <p className="description">{poke.description}</p>
        </div>
      ) : (
        <p className="loading-message">Cargando...</p>
      )}
    </div>
  );
}