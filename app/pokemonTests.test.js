define(["require", "exports", "./app/pokemonData"], function (require, exports, pokemonData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe("getPokemonStats", () => {
        test("it should get the pokemon stats from data", () => {
            let input = { stats: [
                    { base_stat: 5,
                        stat: { name: "Joe",
                        }
                    }
                ] };
            expect((0, pokemonData_1.getPokemonStats)(input)).toEqual(input.stats);
        });
    });
    describe("getPokemonName", () => {
        test("it should dispmay name from data given", () => {
            const input = { name: "joe" };
            expect((0, pokemonData_1.getPokemonName)(input)).toEqual("joe");
        });
    });
    describe("getPokemonImage", () => {
        test("it should get the pokemon image from data", () => {
            const input = {
                sprites: { front_default: "http.//www.image.com.au" }
            };
            expect((0, pokemonData_1.getPokemonImage)(input)).toEqual("http.//www.image.com.au");
        });
    });
    describe("getPokemonAbilities", () => {
        test("it should get the pokemon abilities from data", () => {
            let input = { abilities: [{
                        ability: {
                            name: "kicking"
                        }
                    }
                ]
            };
            expect((0, pokemonData_1.getPokemonAbilities)(input)).toEqual(input.abilities);
        });
    });
    describe("newPokemonData", () => {
        test("it should dispmay object from data given", () => {
            (0, pokemonData_1.newPokemonData)("www.image.com", "joe", "50", "jumping");
            console.log(pokemonData);
            console.log(pokemonData.image);
            expect((0, pokemonData_1.newPokemonData)(pokemonData.image)).toEqual("www.image.com");
            expect((0, pokemonData_1.newPokemonData)(pokemonData.name)).toEqual("joe");
        });
    });
});
//# sourceMappingURL=pokemonTests.test.js.map