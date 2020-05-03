import React, { Component } from 'react';

import { Pokedex } from './pokedex/Pokedex';

import { pokemonData } from './../data/pokemonData';
import './App.css';

class App extends Component {
	constructor () {
		super ();

		this.state = {
			searchField: '',
			pokemons: [],
			selectedPokemon: null
		}
	}

	componentDidMount() {
		this.setState({ pokemons: pokemonData });
	}

	searchFieldUpdate = (searchField) => {
		this.setState({ searchField });
	}

	handleClick = (name) => {
		const { pokemons } = this.state;
		let selectedPokemon = pokemons.find(pokemon => pokemon.name === name);
		this.setState({ selectedPokemon });
	}

	render () {
		const { pokemons, searchField } = this.state;
		const searchedPokemons = pokemons.filter (pokemon => {
			return pokemon.name 
				? pokemon.name.toLowerCase().includes(searchField.toLowerCase())
				: false
		});

		return (
			<div className="App">
				<h1>Pokedex</h1>
				<Pokedex 
					pokemons={searchedPokemons} 
					searchFieldUpdate={this.searchFieldUpdate}
					handleClick={this.handleClick}
					selectedPokemon={this.state.selectedPokemon} />
			</div>
		);
	}
}

export default App;
