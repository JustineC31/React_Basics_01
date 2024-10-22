const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "mew",
	},
];

function PokemonCard() {
	const pokemon = pokemonList[1];
	return (
		<div>
			<figure>
				{
				(pokemon.imgSrc) ? (<img src={pokemon.imgSrc} alt="Pokémon Bulbasaur"/>) : <p>???</p>
				}
			</figure>
			<figcaption>{pokemon.name}</figcaption>
		</div>
	);
}
export default PokemonCard;
