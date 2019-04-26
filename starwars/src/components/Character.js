import React from 'react';

function character(props) {
    if (props.birth_year === "unknown") {
        return (
            <div>
                <p>It is {props.birth_year} when {props.name} was born.</p>
            </div>
        )
    } else if (props.vehicle_name) {
        return (
            <div>
                <p>{props.name} was born in the year {props.birth_year} and drives a {props.vehicle_name}.</p>
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