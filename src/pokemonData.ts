let getPokemonImage = (data: object): object => {
  console.log(data);
  return data.sprites.front_default;
 }

  let getPokemonName = (data: Array<object>) => {
  return data.name ;
}

 let getPokemonStats = (data: any) => {
  return data.stats;

  }

   let getPokemonAbilities = (data: any) => {
    return data.abilities;
    }

    

export { getPokemonImage, getPokemonName, getPokemonStats, getPokemonAbilities}