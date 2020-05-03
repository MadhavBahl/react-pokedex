import React from 'react';

import { Pokelist } from './../pokelist/Pokelist';
import { Searchbox } from '../searchBox/Searchbox';
import { PokeSearchResult } from '../pokeSearchResult/PokeSearchResult';

import './pokedex.css';

export const Pokedex = ({ pokemons, searchFieldUpdate, handleClick, selectedPokemon }) => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <Searchbox
                    placeholder="Search Pokemons" 
                    searchFieldUpdate={searchFieldUpdate} />
                <Pokelist
                    pokemons={pokemons}
                    handleClick={handleClick} />
            </div>
            <div className="pokesearchresult-container">
                {
                    selectedPokemon
                        ? <PokeSearchResult 
                            showResult={true}
                            id={selectedPokemon.id}
                            name={selectedPokemon.name}
                            sprite={JSON.parse(selectedPokemon.sprites).animated}
                            height={selectedPokemon.height}
                            weight={selectedPokemon.weight}
                            base_experience={selectedPokemon.base_experience} />
                        : <PokeSearchResult
                            showResult={false} />
                }    
            
            </div>
        </div>
    )
}