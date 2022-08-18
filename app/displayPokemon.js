"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayPokemonStatisticsDetials = exports.displayPokemonStatistics = exports.displayPokemonNameHeading = exports.displayPokemonName = exports.displayPokemonImage = exports.displayPokemonAbilitiesDetail = exports.displayPokemonAbilities = exports.appendData = void 0;
const pokemonData_1 = require("./pokemonData");
let displayPokemonAbilities = (_pokemonDetails) => {
    let abilitiesHeading = document.createElement("h3");
    abilitiesHeading.className = "abilitiesHeading";
    abilitiesHeading.innerText = "Abilities: ";
    return abilitiesHeading;
};
exports.displayPokemonAbilities = displayPokemonAbilities;
let displayPokemonAbilitiesDetail = (pokemonDetials) => {
    let newParagraph = document.createElement('div');
    newParagraph.className = ("newParagraph");
    for (let i = 0; i < pokemonDetials.length; i++) {
        let newAbility = document.createElement('p');
        newAbility.className = "pokemonAbilities";
        newAbility.innerText = pokemonDetials[i].ability.name;
        newParagraph.appendChild(newAbility);
    }
    return newParagraph;
};
exports.displayPokemonAbilitiesDetail = displayPokemonAbilitiesDetail;
let displayPokemonImage = (pokemonDetails) => {
    let newImage = document.createElement("img");
    newImage.setAttribute("src", pokemonDetails);
    newImage.className = "pokemonImage";
    return newImage;
};
exports.displayPokemonImage = displayPokemonImage;
let displayPokemonNameHeading = (_pokemonDetails) => {
    let newHeading = document.createElement("h3");
    newHeading.className = "pokemonName";
    newHeading.innerText = "Name: ";
    return newHeading;
};
exports.displayPokemonNameHeading = displayPokemonNameHeading;
let displayPokemonName = (pokemonDetails) => {
    let nameInformation = document.createElement("p");
    nameInformation.innerText = pokemonDetails;
    nameInformation.className = "nameInformation";
    return nameInformation;
};
exports.displayPokemonName = displayPokemonName;
let displayPokemonStatistics = (_pokemonDetails) => {
    let statsHeading = document.createElement("h3");
    statsHeading.className = "statsHeading";
    statsHeading.innerText = "Statistics: ";
    return statsHeading;
};
exports.displayPokemonStatistics = displayPokemonStatistics;
let displayPokemonStatisticsDetials = (pokemonDetails) => {
    let newParagraph = document.createElement('div');
    newParagraph.className = ("newParagraph");
    for (let i = 0; i < pokemonDetails.length; i++) {
        let newStats = document.createElement("p");
        newStats.className = "pokemonStats";
        newStats.innerText = `${pokemonDetails[i].stat.name}: ${pokemonDetails[i].base_stat}`;
        newParagraph.appendChild(newStats);
    }
    return newParagraph;
};
exports.displayPokemonStatisticsDetials = displayPokemonStatisticsDetials;
function appendData(data) {
    let newDiv = document.createElement('div');
    newDiv.className = "newDiv";
    document.getElementById("newDiv").appendChild(displayPokemonImage((0, pokemonData_1.getPokemonImage)(data)));
    document.getElementById("newDiv").appendChild(displayPokemonNameHeading((0, pokemonData_1.getPokemonName)(data)));
    document.getElementById("newDiv").appendChild(displayPokemonName((0, pokemonData_1.getPokemonName)(data)));
    document.getElementById("newDiv").appendChild(displayPokemonAbilities((0, pokemonData_1.getPokemonAbilities)(data)));
    document.getElementById("newDiv").appendChild(displayPokemonAbilitiesDetail((0, pokemonData_1.getPokemonAbilities)(data)));
    document.getElementById("newDiv").appendChild(displayPokemonStatistics((0, pokemonData_1.getPokemonStats)(data)));
    document.getElementById("newDiv").appendChild(displayPokemonStatisticsDetials((0, pokemonData_1.getPokemonStats)(data)));
}
exports.appendData = appendData;
