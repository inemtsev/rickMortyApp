import React from 'react';

const Character = (model:ICharacter) => {
    return (
        <div className="flex flex-col justify-start">
            <div className="text-left"><span className="font-bold">Name: </span>{model.name}</div>
            <div className="text-left"><span className="font-bold">Species: </span>{model.species}</div>
            <div className="text-left"><span className="font-bold">Gender: </span>{model.gender}</div>
            <div className="text-left"><span className="font-bold">Origin: </span>{model.origin}</div>
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