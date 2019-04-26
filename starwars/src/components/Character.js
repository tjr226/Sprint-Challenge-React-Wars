import React from 'react';

function character(props) {
    if (props.birth_year === "unknown") {
        return (
            <div>
                <p>It is {props.birth_year} when {props.name} was born.</p>
            </div>
        )
    } else {
        return (
            <div>
                <p>{props.name} was born in the year {props.birth_year}.</p>
            </div>
        )
    }
}

export default character