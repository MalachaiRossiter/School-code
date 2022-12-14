import React, {useState} from 'react';

const ColorDisplay = (props) => {
const {boxColorArray} = props;

    return (
        <div>
            {
                boxColorArray.map((color, index) => (
                    <div key={index} style={{
                        display: "inline-block",
                        margin: "20px",
                        height: "75px",
                        width: "75px",
                        backgroundColor: color
                    }}>
                    </div>
                ))
            }
        </div>
    );
};

export default ColorDisplay;