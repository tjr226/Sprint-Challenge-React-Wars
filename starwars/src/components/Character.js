import React from 'react';

function character(props) {
    return (
        <div>
            <p>{props.name} lives on </p>
        </div>
    )
}
// function characterList(props) {
//     return (
//         <div>
//             {props.characterList.map(character => {
//                 return <Character name={character.name} />
//             })}
//         </div>
//     )
// }

export default character