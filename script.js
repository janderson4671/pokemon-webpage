const urlPrefix = "https://pokeapi.co/api/v2/pokemon/";

let searchButton = document.getElementById("search-button");
let searchBox = document.getElementById("search-box");

searchButton.addEventListener("click", function() {
    searchPokemon();
});

searchBox.addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        searchPokemon();
    }
});

function searchPokemon() {
    if (searchBox.value === "") {
        return;
    }

    const query = `${urlPrefix}${searchBox.value}/`;

    fetch(query)
        .then(function(response) {
            if (response.status != 200) {
                return {
                    text: "Error calling API" + response.statusText
                }
            }
            return response.json();
        }).then(displayPokemonData);
}

function searchEvolutions(url) {
    fetch(url)
        .then(function(response) {
            if (response.status != 200) {
                return {
                    text: "Error calling API" + response.statusText
                }
            }
            return response.json();
        }).then(function(json) {
            const evolutionChain = json.evolution_chain;

            fetch(evolutionChain.url)
                .then(function(response) {
                    if (response.status != 200) {
                        return {
                            text: "Error calling API" + response.statusText
                        }
                    }
                    return response.json();
                }).then(displayEvolutions);
        })
}

function displayPokemonData(json) {
    const name = json.name;
    const id = json.id;
    const weight = json.weight;
    const picture = json.sprites.front_default;
    const types = json.types;
    const abilities = json.abilities;
    const species = json.species;

    let nameElement = document.getElementById("name-id");
    nameElement.textContent = `${name} #${id}`;

    let weightElement = document.getElementById("weight");
    weightElement.textContent = weight;

    let pictureElement = document.getElementById("pokemon-image");
    pictureElement.setAttribute("src", picture);

    let typeList = document.getElementById("type-list");
    typeList.textContent = "";
    for (let type of types) {
        typeList.textContent += type.type.name + " ";
    }

    let abilitiesList = document.getElementById("abilities-list");
    abilitiesList.textContent = "Abilities: "
    for (let ability of abilities) {
        abilitiesList.textContent += ability.ability.name + " ";
    }

    // Fetch Evolution Data
    searchEvolutions(species.url);
}

function displayEvolutions(json) {
    console.log(json);
}
