import React from 'react';

function character(props) {
    if (props.birth_year === "unknown") {
        return (
                <p>It is {props.birth_year} when {props.name} was born.</p>
        )
    } else if (props.vehicles[0]) {
       
        return (
                <p>{props.name} was born in the year {props.birth_year} and drives a vehicle.</p>
        )
    } else {
        return (
                <p>{props.name} was born in the year {props.birth_year}.</p>
        )
    }
}

export default character