import { useState } from "react";
import PokemonCard from "./components/PokemonCard.tsx";
import "./App.css";

function App() {
	const pokemonList = [
		{
			name: "bulbasaur",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
		},
		{
			name: "charmander",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
		},
		{
			name: "squirtle",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
		},
		{
			name: "pikachu",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
		},
		{
			name: "mew",
		},
	];
	const [pokemonIndex, setPokemonIndex] = useState(0);

	return (
		<div>
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />

			<button type="button" onClick={() => setPokemonIndex(pokemonIndex - 1)}>
				Précédent
			</button>
			<button type="button" onClick={() => setPokemonIndex(pokemonIndex + 1)}>
				Suivant
			</button>
		</div>
	);
}

export default App;
