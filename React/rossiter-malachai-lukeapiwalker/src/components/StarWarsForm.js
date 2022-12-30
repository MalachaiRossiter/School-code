import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const StarWarsForm = (props) => {
    const [category, setCategory] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        navigate(`/${category}/${id}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Search For: {""}</h1>
                <select onChange={e => setCategory(e.target.value)}>
                    <option value={""}>------</option>
                    <option value={"people"}>People</option>
                    <option value={"planets"}>Planets</option>
                </select>
                <h1>ID: </h1>
                <input type="text" onChange={e => setId(e.target.value)}></input>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default StarWarsForm;