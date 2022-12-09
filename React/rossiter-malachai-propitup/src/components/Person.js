import React, {useState} from "react";

const Person = (props) => {
    const [age, setAge] = useState(props.initialAge)
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Age: {age}</p>
            <p>Hair color: {props.hairColor}</p>
            <button onClick={ (event) => setAge(age + 1)}>Birthday Time BB</button>
        </div>
    )
}
export default Person;