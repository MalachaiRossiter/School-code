import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonDisplay = (props) => {
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1008/')
            .then((response) =>{setPokemon(response.data.results);
            })
            .catch((err) => console.log(err));
    }, []);
    console.log(pokemon);

    return (
        <div>
            {pokemon.map((pokemon, index) => (
                <div key={index}>{pokemon.name}</div>
            ))}
        </div>
    );
}
export default PokemonDisplay;