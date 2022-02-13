const pokemon_container = document.getElementById('pokemon_container');
const cardsToDisplay = 50;

const fetchPokemons = async () => {
    for (let i = 1; i <= cardsToDisplay; i++) {
        await getCardDetails(i);
    }
};

const getCardDetails = async id => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const pokemon = await res.json();
        createPokemonCard(pokemon);
        console.log(pokemon);
    } catch (error) {
        console.log(error);
    }
};

function createPokemonCard(pokemon) {
    const Mypokemon = document.createElement('div');
    Mypokemon.classList.add('pokemon');

    //Display 50 pokemons.
    const name = pokemon.name.toUpperCase();
    console.log(name);


    //Abilities of Pokemon.
    const pokemons_abilities = pokemon.abilities.map(ability => ability.ability.name);
    console.log(pokemons_abilities);


    //Pokemon’s moves.
    const moves = pokemon.moves.map(move => move.move.name);
    let temp = [];
    for (let i = 0; i < 5; i++) {
        temp.push(moves[i]);
    }
    console.log(temp.join(","));

    //Weight of the Pokemon.
    const weight = pokemon.weight;
    console.log(weight);


    const pokeInnerHTML = `
    <div class="card-part">
		<div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id
        }.png" alt="${name}" class="pokeImage"/>
        </div>
        </div>
        <div>
            <h2 class="name"> ${name}</h2>
        </div>
        <div class="info">
		<div><b>Poke_Ability:</b> ${pokemons_abilities}</div>
		<div><b>Poke_Moves:</b> ${temp}</div>
		<div><b>Poke_Weight:</b> ${weight}</div>
        </div>`;

    Mypokemon.innerHTML = pokeInnerHTML;

    pokemon_container.appendChild(Mypokemon);

}

fetchPokemons();