"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pokemonData_1 = require("./pokemonData");
const clearFields_1 = require("./clearFields");
const displayPokemon_1 = require("./displayPokemon");
let searchQuery = document.getElementById("search");
console.log("hello");
console.log(searchQuery);
let objectArr = [];
//--------------------------------------------------------------------------------
function callAPI() {
    document
        .getElementById("searchButton")
        .addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery.innerText.toLowerCase()}`);
        if (response.ok === true) {
            let data = yield response.json();
            document.getElementById("errorMessage").innerText = "";
            (0, displayPokemon_1.displayPokemonImage)((0, pokemonData_1.getPokemonImage)(data));
            (0, displayPokemon_1.displayPokemonName)((0, pokemonData_1.getPokemonName)(data));
            (0, displayPokemon_1.displayPokemonAbilities)((0, pokemonData_1.getPokemonAbilities)(data));
            (0, displayPokemon_1.displayPokemonStatistics)((0, pokemonData_1.getPokemonStats)(data));
            let newPokemonData = {
                image: data.sprites.front_default,
                pokemonName: data.name,
                abilities: data.abilities,
                statistics: data.stats
            };
            objectArr.push(newPokemonData);
            localStorage.setItem("objectArr", JSON.stringify(objectArr));
        }
        else {
            document.getElementById("errorMessage").innerText =
                "Oops! Please double check your entry is a pokemon name or index number and try again.";
        }
    }));
}
;
callAPI();
//------------------------------------------------------------------------------
let outLocalStorage = window.localStorage.getItem("objectArr");
outLocalStorage.forEach(function (localStorageData) {
    let pokemonCard = document.getElementById("pokemonCard");
    pokemonCard.innerHTML += `<img src="${localStorageData.image}" class="pokemonImage">`;
    pokemonCard.innerHTML += `<h3 class="pokemonName">Name: </h3> `;
    pokemonCard.innerHTML += `<p class ="nameInformation"> ${localStorageData.pokemonName}</p>`;
    pokemonCard.innerHTML += `<h3 class="abilitiesHeading"> Abilities: </h3>`;
    for (let i = 0; i < localStorageData.abilities.length; i++) {
        let abName = localStorageData.abilities[i].ability.name;
        pokemonCard.innerHTML += `<p class="pokemonAbilities">${abName}</p>`;
    }
    pokemonCard.innerHTML += `<h3 class="statsHeading"> Statistics: </h3>`;
    for (let i = 0; i < localStorageData.statistics.length; i++) {
        let statsName = localStorageData.statistics[i].stat.name;
        let statsAmount = localStorageData.statistics[i].base_stat;
        pokemonCard.innerHTML += `<p class="pokemonAbilities">${statsName}: ${statsAmount}</p>`;
    }
});
//------------------------------------------------------------------------------
let clearAll = document.getElementById("clearAll");
clearAll.addEventListener("click", function () {
    (0, clearFields_1.clearFields)();
});
//---------------------------------------------------------------------------
