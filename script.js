const urlPrefix = "https://pokeapi.co/api/v2/pokemon/";

/****** Utils *******/
function titleCase(str) {
    // Split on spaces
    let titleCased = "";
    for (let word of str.split(" ")) {
        word.charAt(0) = word.charAt(0).toUpperCase();
        titleCased += word + " "
    }
    return titleCased;
}

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
    const evolutions = json.chain.evolves_to;
    let evolutionsList = document.getElementById("evolutions-list");
    evolutionsList.textContent = "";
    
    // Show the data for the first in the chain
    console.log(json.chain)
    showEvolutionData(json.chain);
    displayEvolutionsRecursive(evolutions);
}

function showEvolutionData(evolution) {
    let evolutionsList = document.getElementById("evolutions-list");
    let evolutionDiv = document.createElement("div");
    let evolutionText = document.createElement("h3");
    let evolutionImage = document.createElement("img");

    //set listener
    evolutionDiv.addEventListener("click", 

    // TODO: Change this to a div with an image and name, and clickable
    evolutionText.textContent = evolution.species.name;
    fetchPokemonImageUrl(evolution.species.name).then(function(url){
        evolutionImage.src = url;
    })

    evolutionDiv.appendChild(evolutionText);
    evolutionDiv.appendChild(evolutionImage);

    evolutionsList.appendChild(evolutionDiv);
}

function displayEvolutionsRecursive(evolutions) {
    // Fill the page with data
    for (let evolution of evolutions) {
        showEvolutionData(evolution);
    }

    // Recurse
    for (let evolution of evolutions) {
        displayEvolutionsRecursive(evolution.evolves_to);
    }
}

async function fetchPokemonImageUrl(name) {

    let url = await fetch(`${urlPrefix}${name}`)
        .then(function(response) {
            if (response.status != 200) {
                return {
                    text: "Error calling API" + response.statusText
                }
            }
            return response.json();
        })
        .then(function(json) {
            console.log(json.sprites.front_default);
            return json.sprites.front_default;
        })

    return url;
}