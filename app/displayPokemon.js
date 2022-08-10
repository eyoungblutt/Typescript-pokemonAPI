"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayPokemonImage = exports.displayPokemonName = exports.displayPokemonStatistics = exports.displayPokemonAbilities = void 0;
let displayPokemonAbilities = (pokemonDetails) => {
    let abilitiesHeading = document.createElement("h3");
    abilitiesHeading.className = "abilitiesHeading";
    abilitiesHeading.innerText = "Abilities: ";
    document.getElementById("pokemonCard").appendChild(abilitiesHeading);
    for (let i = 0; i < pokemonDetails.length; i++) {
        let newAbility = document.createElement("p");
        newAbility.className = "pokemonAbilities";
        newAbility.innerText = pokemonDetails[i].ability.name;
        document.getElementById("pokemonCard").appendChild(newAbility);
    }
};
exports.displayPokemonAbilities = displayPokemonAbilities;
let displayPokemonImage = (pokemonDetails) => {
    let newImage = document.createElement("img");
    newImage.setAttribute("src", pokemonDetails);
    newImage.className = "pokemonImage";
    document.getElementById("pokemonCard").appendChild(newImage);
};
exports.displayPokemonImage = displayPokemonImage;
let displayPokemonName = (pokemonDetails) => {
    console.log(pokemonDetails);
    let newHeading = document.createElement("h3");
    newHeading.className = "pokemonName";
    newHeading.innerText = "Name: ";
    let nameInformation = document.createElement("p");
    nameInformation.innerText = pokemonDetails;
    nameInformation.className = "nameInformation";
    document.getElementById("pokemonCard").appendChild(newHeading);
    document.getElementById("pokemonCard").appendChild(nameInformation);
};
exports.displayPokemonName = displayPokemonName;
let displayPokemonStatistics = (pokemonDetails) => {
    console.log(pokemonDetails);
    let statsHeading = document.createElement("h3");
    statsHeading.className = "statsHeading";
    statsHeading.innerText = "Statistics: ";
    document.getElementById("pokemonCard").appendChild(statsHeading);
    for (let i = 0; i < pokemonDetails.length; i++) {
        let statsName = pokemonDetails[i].stat.name;
        let statsAmount = pokemonDetails[i].base_stat;
        let newStats = document.createElement("p");
        newStats.className = "pokemonStats";
        newStats.innerText = `${statsName}: ${statsAmount}`;
        document.getElementById("pokemonCard").appendChild(newStats);
    }
};
exports.displayPokemonStatistics = displayPokemonStatistics;
