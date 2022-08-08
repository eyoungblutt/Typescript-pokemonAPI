import { getPokemonImage, getPokemonName, getPokemonStats, getPokemonAbilities, newPokemonData} from './pokemonData.js';

describe("getPokemonStats", () => {
  test("it should get the pokemon stats from data", () => {
    let input = {stats: [
      {base_stat: 5,
      stat: 
        {name:"Joe", 
        }
      } 
    ]}
  
expect(getPokemonStats(input)).toEqual(input.stats);
})
})

describe("getPokemonName", () => {
  test("it should dispmay name from data given", () => {
    const input = 
      { name: "joe" }
    expect(getPokemonName(input)).toEqual("joe" );
  });
});

describe("getPokemonImage", () => {
  test("it should get the pokemon image from data", () => {
    const input = {
      sprites: 
        {front_default: "http.//www.image.com.au"}
      }
  expect(getPokemonImage(input)).toEqual("http.//www.image.com.au");
  })
})

describe("getPokemonAbilities", () => {
  test("it should get the pokemon abilities from data", () => {
    let input = {abilities: [{
      ability: {
        name: "kicking"
    }
    } 
  ]
  }
  expect(getPokemonAbilities(input)).toEqual(input.abilities);
  })
})

describe("newPokemonData", () => {
  test("it should dispmay object from data given", () => {
    newPokemonData("www.image.com", "joe",  "50", "jumping" );
      console.log(pokemonData);
      console.log(pokemonData.image);
    expect(newPokemonData(pokemonData.image)).toEqual( "www.image.com" );
    expect(newPokemonData(pokemonData.name)).toEqual( "joe" );

  });
});