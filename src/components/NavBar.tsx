interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

function NavBar({ pokemonList, setPokemonIndex }: NavBarProps) {
	const handleClick = (index: number) => {
		setPokemonIndex(index);
		if (pokemonList[index].name === "pikachu") {
			alert("pika pikachu !!!");
		}
	};

	return (
		<div>
			{pokemonList.map((pokemon, index) => (
				<button
					type="button"
					key={pokemon.name}
					onClick={() => handleClick(index)}
				>
					{pokemon.name}
				</button>
			))}
		</div>
	);
}

export default NavBar;
