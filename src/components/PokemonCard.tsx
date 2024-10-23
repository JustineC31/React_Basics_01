function PokemonCard({ pokemon }) {
	return (
		<div>
			<figure>
				{pokemon.imgSrc ? (
					<img src={pokemon.imgSrc} alt="Pokémon Bulbasaur" />
				) : (
					<p>???</p>
				)}
			</figure>
			<figcaption>{pokemon.name}</figcaption>
		</div>
	);
}
export default PokemonCard;
