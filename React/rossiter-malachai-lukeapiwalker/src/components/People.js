import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const People = (props) => {
    const {id} = useParams();
    console.log(id);
    const [people, setPeople] = useState([]);
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/1/`)
        // https://pokeapi.co/api/v2/pokemon?limit=1008/
        .then((response) =>{setPeople(response.data.results);
        })
        .catch((err) => console.log(err));
    }, []);
    console.log(people);

    return (
        <div>
            {/* {people.map((people, index) => (
                <div key={index}>
                    <p>{people.name}</p>
                </div>
            ))} */}
        </div>
    );
}

export default People;