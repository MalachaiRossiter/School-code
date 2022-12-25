import React, {useState} from "react";
import {useParams} from "react-router-dom";

const Parameters = (props) => {
    const { word, color, bigColor } = useParams();

    return (
        <div>
            {
                isNaN(word)?
                <p style={ color? {color: color, backgroundColor: bigColor} :null}>
                    This word is a word: {word}
                </p>
                :
                <p>
                    This is a number: {word}
                </p>
            }
        </div>
    )

}

export default Parameters;