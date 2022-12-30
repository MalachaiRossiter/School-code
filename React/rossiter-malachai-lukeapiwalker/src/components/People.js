import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const People = (props) => {
    const {id} = useParams();
    console.log(id);
    const [people, setPeople] = useState([]);
    console.log(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/3/`)
        .then((response) =>{setPeople(response.data.results);
        })
        .catch((err) => console.log(err));
    }, []);
    console.log(people);

    return (
        <div>
            {people.map((pokemon, index) => (
                <div key={index}>
                    <p>{pokemon.name}</p>
                    <p>{pokemon.url}</p>
                </div>
            ))}
        </div>
    );
}

export default People;