let getPokemonImage = (data: any) => {
  return data.sprites.front_default;
 }

  let getPokemonName = (data: any) => {
  return data.name ;
}

 let getPokemonStats = (data: any) => {
  return data.stats;

  }

   let getPokemonAbilities = (data: any) => {
    return data.abilities;
    }

    

export { getPokemonImage, getPokemonName, getPokemonStats, getPokemonAbilities}