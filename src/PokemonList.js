import { Link } from 'react-router-dom';
import useFetch from './useFetch';
import React, { useState, useEffect } from 'react';

const PokemonList = () => {
    const { data: pokemons, isPending, error } = useFetch('https://pokeapi.co/api/v2/pokemon');

    const [ items, setItems] = useState(null);
    const [ offset, setOffset] = useState(20);


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
            .then(res => res.json())
            .then(pokemonss => setItems(pokemonss.results))

    }, [offset])

    const loadMore = (e) => {
        setOffset(offset + 20);
    }

    // const [pokemons, setPokemons] = useState(null);
    // const [visible, setVisible] = useState(20);

    // const loadMore = (e) => {
    //     e.stopPropagation();
    //     setVisible((prevValue) => prevValue + 20);
    // }

    // useEffect(() => {
    //     fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=200')
    //         .then(res => res.json())
    //         .then(data => setPokemons(data.results))
    // }, [])

    
    return (
        <div className="pokemons-list">

            {/* {pokemons && pokemons.slice(0, visible).map((pokemon) => (
                <div className="pokemon" key={pokemon.name}>
                    <Link to={`pokemon/${pokemon.name}`}>
                        <p>{pokemon.name}</p>
                    </Link>
                </div>
            ))} */}
            {pokemons && pokemons.map((pokemon) => (
                <div className="pokemon" key={pokemon.name}>
                    <Link to={`pokemon/${pokemon.name}`}>
                        <p>{pokemon.name}</p>
                    </Link>
                </div>
            ))}

            {items && items.map((pokemon) => (
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