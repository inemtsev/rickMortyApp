import React from 'react';

const Character = (model:ICharacter) => {
    return (
        <div className="flex flex-col justify-start">
            <div>{`Name: ${model.name}`}</div>
            <div>{`Species: ${model.species}`}</div>
            <div>{`Gender: ${model.gender}`}</div>
            <div>{`Origin: ${model.origin}`}</div>
            <div>{`Origin: ${model.origin}`}</div>
        </div>
    )
}

export interface ICharacter {
    id: number;
    name: string;
    species: string;
    gender: string;
    origin: string;
    imageUrl: string;
}

export default Character