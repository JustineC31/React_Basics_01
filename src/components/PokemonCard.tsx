interface PokemonCard {
	pokemon: {
		imgSrc?: string;
		name: string;
	};
}

function PokemonCard({ pokemon }: PokemonCard) {
	return (
		<div>
			<figure>
				{pokemon.imgSrc ? (
					<img src={pokemon.imgSrc} alt="Pokémon Bulbasaur" />
				) : (
					<p>???</p>
				)}
			</figure>
		</div>
	);
}
export default PokemonCard;
