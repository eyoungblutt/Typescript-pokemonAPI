let getPokemonImage = (data: {sprites: { front_default: string}}): string => {
  return data.sprites.front_default;
}

let getPokemonName = (data: {name: string}): string => {
  return data.name;
}

let getPokemonStats = (data: {stats: object[]}): object[] => {
  return data.stats;
}

let getPokemonAbilities = (data: {abilities: object[]}) => {
  return data.abilities;
}


let newPokemonData = (data: {sprites: {front_default: string}, name: string, abilities: object[], stats: object[]}): object => {
  let newPokemonData: object = {
    image: data.sprites.front_default,
    pokemonName: data.name,
    abilities: data.abilities,
    statistics: data.stats
  };
  return newPokemonData;
}
  
function callAPI(searchQuery: HTMLInputElement ): string{
  return `https://pokeapi.co/api/v2/pokemon/${searchQuery.value.toLowerCase()}`
}

export { getPokemonImage, getPokemonName, getPokemonStats, getPokemonAbilities, newPokemonData, callAPI }