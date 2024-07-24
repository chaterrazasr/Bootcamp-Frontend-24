const API_URL = 'https://pokeapi.co/api/v2/pokemon';
const MAX_POKEMON = 898; // Max Pokémon ID available

let currentPokemonId;
let correctOption;

document.getElementById('start-game').addEventListener('click', startGame);

async function startGame() {
    clearGame();
    const pokemonIds = generateRandomPokemonIds();
    const pokemonData = await fetchPokemonData(pokemonIds);

    displayPokemonImage(pokemonData[0].id);
    correctOption = pokemonData[0].name;

    displayOptions(pokemonData);
}

function generateRandomPokemonIds() {
    let ids = [];
    while (ids.length < 3) {
        const id = Math.floor(Math.random() * MAX_POKEMON) + 1;
        if (!ids.includes(id)) {
            ids.push(id);
        }
    }
    return ids;
}

async function fetchPokemonData(ids) {
    const requests = ids.map(id => fetch(`${API_URL}/${id}`).then(res => res.json()));
    return await Promise.all(requests);
}

function displayPokemonImage(id) {
    const imageId = id.toString().padStart(3, '0');
    const imgContainer = document.getElementById('pokemon-image');
    imgContainer.innerHTML = `<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png" class="hidden">`;
}

function displayOptions(pokemonData) {
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    pokemonData = shuffleArray(pokemonData);

    pokemonData.forEach(pokemon => {
        const button = document.createElement('button');
        button.textContent = pokemon.name;
        button.addEventListener('click', () => checkAnswer(pokemon.name));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const resultMessage = document.getElementById('result-message');
    const pokemonImage = document.querySelector('.hidden');

    if (selectedOption === correctOption) {
        resultMessage.textContent = 'Correct! You guessed the Pokémon!';
        pokemonImage.classList.remove('hidden');
    } else {
        resultMessage.textContent = `Wrong! The correct Pokémon was ${correctOption}.`;
    }
}

function clearGame() {
    document.getElementById('pokemon-image').innerHTML = '';
    document.getElementById('result-message').textContent = '';
    document.getElementById('options-container').innerHTML = '';
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
