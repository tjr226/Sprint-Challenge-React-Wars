import React from 'react';
import Character from './Character';

function characterList(props) {
    return (
        <div>
            {props.characterList.map(character => {
                return <Character name={character.name} />
            })}
        </div>
    )
}

export default characterList

