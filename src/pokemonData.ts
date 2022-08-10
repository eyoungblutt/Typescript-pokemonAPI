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
  console.log(data.abilities);
  return data.abilities;
}

export { getPokemonImage, getPokemonName, getPokemonStats, getPokemonAbilities}