import {fillNames, nameToId} from "./pokemon_names.js"

const urlPrefix = "https://pokeapi.co/api/v2/pokemon/";

/****** Utils *******/
function titleCase(str) {
    // Split on spaces
    let titleCased = "";
    for (let word of str.split(/[\s-]/)) {
        titleCased += word[0].toUpperCase() + word.slice(1) + " "
    }
    return titleCased.slice(0, titleCased.length - 1);
}

function numericUnits(number) {
    let str = number.toString();
    if (str.length == 1) {
        return "0." + str;
    }
    return str.slice(0, str.length - 1) + "." + str[str.length - 1];
}

let searchButton = document.getElementById("search-button");
let searchBox = document.getElementById("search-box");
let pokemonNames = document.getElementById("pokemon-names");

fillNames(pokemonNames);

searchButton.addEventListener("click", function() {
    if (searchBox.value === "") {
        return;
    }
    searchPokemon(searchBox.value);
});

searchBox.addEventListener("keyup", function(event) {
    if (searchBox.value === "") {
        return;
    }
    if (event.key == "Enter") {
        searchPokemon(searchBox.value);
    }
});

function searchPokemon(value) {
    // Lookup id from name
    const id = nameToId(value);
    const query = `${urlPrefix}${id}/`;

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

function addSpanChild(parent, text, classes = []) {
    let span = document.createElement("span");
    span.textContent = text;
    for (let c of classes) {
        span.classList.add(c);
    }
    parent.appendChild(span);
}

function displayPokemonData(json) {
    const name = titleCase(json.name);
    const id = json.id;
    const height = numericUnits(json.height);
    const weight = numericUnits(json.weight);
    const picture = json.sprites.front_default;
    const types = json.types;
    const abilities = json.abilities;
    const species = json.species;

    let nameElement = document.getElementById("name-id");
    nameElement.textContent = `${name} #${id}`;

    let heightElement = document.getElementById("height");
    heightElement.textContent = "Height: " + height + " meters";

    let weightElement = document.getElementById("weight");
    weightElement.textContent = "Weight: " + weight + " kilograms";

    let pictureElement = document.getElementById("pokemon-image");
    pictureElement.setAttribute("src", picture);

    let typeList = document.getElementById("type-list");
    typeList.textContent = "";
    addSpanChild(typeList, "Types:")
    for (let type of types) {
        addSpanChild(typeList, type.type.name, [type.type.name, "type"]);
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
    showEvolutionData(json.chain);
    displayEvolutionsRecursive(evolutions);
}

function showEvolutionData(evolution) {
    let evolutionTitle = document.getElementById("evolution-title");
    let evolutionsList = document.getElementById("evolutions-list");
    let evolutionDiv = document.createElement("div");
    let evolutionText = document.createElement("h3");
    let evolutionImage = document.createElement("img");

    evolutionTitle.textContent = "Evolutions"

    evolutionDiv.classList.add("clickable")
    evolutionDiv.classList.add("evolution-item")

    //set listener
    evolutionDiv.addEventListener("click", function() {
        searchPokemon(evolution.species.name);
    });

    // TODO: Change this to a div with an image and name, and clickable
    evolutionText.textContent = titleCase(evolution.species.name);
    fetchPokemonImageUrl(evolution.species.name).then(function(url){
        evolutionImage.src = url;
    });

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
            return json.sprites.front_default;
        })

    return url;
}


/** This gets a list of all 809 pokemon we can access from the API */
// function getAll() {
//     let pokemons = {};
//     const promises = [];
//     for (let i = 1; i <= 809; i++) {
//         const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
//         promises.push(fetch(url).then(res => res.json()));
//     }
//     Promise.all(promises).then(results => {
//         for (let r of results) {
//             pokemons[r.name] = [titleCase(r.name)];
//         }
//         console.log(JSON.stringify(pokemons));
//     });
// }

// getAll();
