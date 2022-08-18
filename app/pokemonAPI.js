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
let objectArr = [];
//--------------------------------------------------------------------------------
const button = document.getElementById("searchButton");
button.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    let response = yield fetch((0, pokemonData_1.callAPI)(searchQuery));
    if (response.ok === true) {
        document.getElementById("errorMessage").innerText = "";
        let data = yield response.json();
        document.getElementById("pokemonCard").appendChild((0, displayPokemon_1.appendData)(data));
        objectArr.push((0, pokemonData_1.newPokemonData)(data));
        localStorage.setItem("objectArr", JSON.stringify(objectArr));
    }
    else {
        document.getElementById("errorMessage").innerText =
            "Oops! Please double check your entry is a pokemon name or index number and try again.";
    }
}));
//------------------------------------------------------------------------------
let outLocalStorage = JSON.parse(window.localStorage.getItem("objectArr"));
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
