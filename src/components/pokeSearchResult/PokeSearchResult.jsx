import React from 'react';
import './poke-search-result.css';

export const PokeSearchResult = ({ showResult, id, name, sprite, height, weight, base_experience }) => {
    return (
        <div className="poke-result-card">
            {
                showResult 
                    ? <div>
                        <img className="pokemon-animated-sprite" alt="pokemon" src={sprite} />
                        <p>Name: {name}</p>
                        <p>Id: {id}</p>
                        <p>Height: {height}</p>
                        <p>Weight: {weight}</p>
                        <p>Base Exp: {base_experience}</p>
                    </div>
                    : <h2> Welcome to the pokedex</h2>
            }
        </div>
    )
}