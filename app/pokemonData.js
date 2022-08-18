"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callAPI = exports.newPokemonData = exports.getPokemonAbilities = exports.getPokemonStats = exports.getPokemonName = exports.getPokemonImage = void 0;
let getPokemonImage = (data) => {
    return data.sprites.front_default;
};
exports.getPokemonImage = getPokemonImage;
let getPokemonName = (data) => {
    return data.name;
};
exports.getPokemonName = getPokemonName;
let getPokemonStats = (data) => {
    return data.stats;
};
exports.getPokemonStats = getPokemonStats;
let getPokemonAbilities = (data) => {
    return data.abilities;
};
exports.getPokemonAbilities = getPokemonAbilities;
let newPokemonData = (data) => {
    let newPokemonData = {
        image: data.sprites.front_default,
        pokemonName: data.name,
        abilities: data.abilities,
        statistics: data.stats
    };
    return newPokemonData;
};
exports.newPokemonData = newPokemonData;
function callAPI(searchQuery) {
    return `https://pokeapi.co/api/v2/pokemon/${searchQuery.value.toLowerCase()}`;
}
exports.callAPI = callAPI;
