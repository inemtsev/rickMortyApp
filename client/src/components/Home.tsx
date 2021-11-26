import React from 'react';
import Character, {ICharacter} from "./Character";

const Home = () => {
    const rick: ICharacter = {
        name: "Rick Sanchez",
        gender: "Male",
        origin: "Earth",
        species: "Human",
        imageUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        id: 1
    };

    return (
        <div className="flex flex-col content-center">
            <div className="py-8">Welcome to Rick and Mortyverse</div>
            <div className="flex flex-row">
                <div className="inline-block">
                    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick"/>
                </div>
                <div className="inline-block">
                    <Character {...rick} />
                </div>
            </div>
        </div>
    )
}

export default Home