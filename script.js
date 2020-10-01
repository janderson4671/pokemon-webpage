const urlPrefix = "https://pokeapi.co/api/v2/pokemon/";

let searchButton = document.getElementById("search-button");
let searchBox = document.getElementById("search-box");

searchButton.addEventListener("click", function() {
    const query = `${urlPrefix}${searchBox.value}/`;

    fetch(query, {mode: "cors"})
        .then(function(response) {
            if (response.status != 200) {
                return {
                    text: "Error calling API" + response.statusText
                }
            }
            console.log(response);
            return response.json();
        })
        .then(function(json) {
            console.log(json.text);
        });
});
