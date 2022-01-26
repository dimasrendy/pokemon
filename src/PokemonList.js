import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [ offset, setOffset] = useState(0);


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
            .then(res => res.json())
            .then(result => setPokemons(pokemons => {
                return [...pokemons, ...result.results];
            }))

    },[offset])

    const loadMore = () => {
        setOffset(offset + 20);
    }

    
    return (
        <div className="pokemons-list">

            {pokemons && pokemons.map((pokemon) => (
                <div className="pokemon" key={pokemon.name}>
                    <Link to={`pokemon/${pokemon.name}`}>
                        <p>{pokemon.name}</p>
                    </Link>
                </div>
            ))}
            <button className='load-more' onClick={loadMore}>Load More</button>
        </div>
    );
}

export default PokemonList;