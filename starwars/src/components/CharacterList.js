import React from 'react';
import Character from './Character';

function characterList(props) {
    
    return (
        <div className="character-list">
            {props.characterList.map(character => {
                return <Character
                    key={character.created}
                    name={character.name}
                    birth_year={character.birth_year}
                    vehicles={character.vehicles}
                    vehicle_name={character.vehicle_name}
                    
                />
            })}
        </div>
    )
}

export default characterList

