import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const People = (props) => {
    const {id} = useParams();
    console.log(id);
    const [people, setPeople] = useState([]);
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/`)
        .then((response) =>{setPeople(response.data);
        })
        .catch((err) => console.log(err));
    }, []);
    console.log(people);

    return (
        <div>
            {people ? <p>{people.name}</p> : null}
        </div>
    );
}

export default People;