let getPokemonImage = (data: {sprites: { front_default: string}}): string => {
  console.log(data);
  return data.sprites.front_default;
 }

  let getPokemonName = (data: {name: string}): string => {
  return data.name ;
}

 let getPokemonStats = (data: {stats: Array<object>}): Array<object> => {
  return data.stats;

  }

   let getPokemonAbilities = (data: {abilities: Array<object>}): Array<object> => {
    return data.abilities;
    }

    

export { getPokemonImage, getPokemonName, getPokemonStats, getPokemonAbilities}