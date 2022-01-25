import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const PokemonDetail = () => {

    const { name } = useParams();
    const [ pokemon, setPokemon ] = useState(null);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + name)
            .then(res => {
                return res.json();
            })
            .then(pokemon => {
                setPokemon(pokemon);
            })
    }, []);

    return (
        pokemon &&
        (<div className="pokemon-details">

            <div className="card">
                <div className="pokemon-overview">
                    <div className="pokemon-avatar">
                        <img src={pokemon.sprites.front_default} />
                    </div>
                    <div className="pokemon-info">
                        <label>Name</label>
                        <p>{pokemon.name}</p>

                        <label>Height</label>
                        <p>{pokemon.height} m</p>

                        <label>Weight</label>
                        <p>{pokemon.weight} kg</p>
                    </div>
                </div>

                <div className="pokemon-types">
                    <h3>Types</h3>
                    {pokemon.types.map((type, id) => (
                        <div className="pokemon-type" key={id}>{type.type.name}</div>
                    ))}
                </div>
            </div>

            <div className="stats-container">
                <p className="header">Stats</p>
                { pokemon.stats.map((stat, id) => (
                    <div className="stats" key={id}>
                        <label className="stat">{ stat.stat.name }</label>
                        <p className="stat hr">{ stat.base_stat }</p>
                    </div>
                )) }
                
            </div>

            <div className="moves-container">
                <p className="header">Moves</p>
                <p className="moves-content">{pokemon.moves.map(move => (
                    move.move.name
                )).join(', ')}
                </p>
            </div>



        </div>
        )
        
    );
}

export default PokemonDetail;