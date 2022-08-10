define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getPokemonAbilities = exports.getPokemonStats = exports.getPokemonName = exports.getPokemonImage = void 0;
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
        console.log(data.abilities);
        return data.abilities;
    };
    exports.getPokemonAbilities = getPokemonAbilities;
});
