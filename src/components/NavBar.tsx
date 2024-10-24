interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
	return (
		<div>
			{pokemonIndex > 0 && (
				<button type="button" onClick={() => setPokemonIndex(pokemonIndex - 1)}>
					Précédent
				</button>
			)}

			{pokemonIndex < pokemonList.length - 1 && (
				<button type="button" onClick={() => setPokemonIndex(pokemonIndex + 1)}>
					Suivant
				</button>
			)}
		</div>
	);
}

export default NavBar;
