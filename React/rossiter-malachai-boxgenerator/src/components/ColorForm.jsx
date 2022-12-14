import React, {useState} from 'react';

const ColorForm = (props) => {

    const { boxColorArray, setBoxColorArray } = props;

    const [color, setColor] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxColorArray( [...boxColorArray, color] );
        console.log(boxColorArray);
    };

    return (
        <div>
            <form onSubmit={ handleSubmit } style={{margin: "20px"}}>
                <h1>Please input a color for your next box</h1>
                <input type="text" name="color" value={color} onChange={ (e) => setColor(e.target.value) }/>
                <input type="submit" value="Add Color" />
            </form>
        </div>
    );
};

export default ColorForm;