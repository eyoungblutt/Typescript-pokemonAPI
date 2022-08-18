import { getPokemonImage, getPokemonName, getPokemonStats, getPokemonAbilities} from './pokemonData';

let displayPokemonAbilities = (_pokemonDetails: object[]) => {
  let abilitiesHeading = document.createElement("h3");
  abilitiesHeading.className = "abilitiesHeading";
  abilitiesHeading.innerText = "Abilities: ";
  return abilitiesHeading;
};

let displayPokemonAbilitiesDetail = (pokemonDetials: any) => {
  let newParagraph = document.createElement('div');
  newParagraph.className = ("newParagraph");
   for(let i = 0; i < pokemonDetials.length; i++){
     let newAbility = document.createElement('p');
     newAbility.className = "pokemonAbilities"
     newAbility.innerText = pokemonDetials[i].ability.name
     newParagraph.appendChild(newAbility); 
    } 
  return newParagraph;
}
 
let displayPokemonImage = (pokemonDetails: string) => {
  let newImage = document.createElement("img"); 
  newImage.setAttribute("src", pokemonDetails);
  newImage.className = "pokemonImage";
  return newImage;
}

let displayPokemonNameHeading = (_pokemonDetails: string) => {
  let newHeading = document.createElement("h3");
  newHeading.className = "pokemonName";
  newHeading.innerText = "Name: ";
  return newHeading;
};
    
let displayPokemonName = (pokemonDetails: string) => {
  let nameInformation = document.createElement("p");
  nameInformation.innerText = pokemonDetails;
  nameInformation.className = "nameInformation";
  return nameInformation;
}
   
let displayPokemonStatistics = (_pokemonDetails: object[]) => {
  let statsHeading = document.createElement("h3");
  statsHeading.className = "statsHeading";
  statsHeading.innerText = "Statistics: "
  return statsHeading;
}
  
let displayPokemonStatisticsDetials = (pokemonDetails: string | any[]) => {
  let newParagraph = document.createElement('div');
  newParagraph.className = ("newParagraph");
  for(let i = 0; i < pokemonDetails.length; i++){
    let newStats = document.createElement("p"); 
    newStats.className = "pokemonStats";
    newStats.innerText = `${pokemonDetails[i].stat.name}: ${pokemonDetails[i].base_stat}`;
    newParagraph.appendChild(newStats); 
  } 
  return newParagraph;
}

function appendData(data: { sprites: { front_default: string; }; name: string; abilities: object[];  stats: object[]; }): void{
  document.getElementById("pokemonCard")!.appendChild(displayPokemonImage(getPokemonImage(data))); 
  document.getElementById("pokemonCard")!.appendChild(displayPokemonNameHeading(getPokemonName(data)));
  document.getElementById("pokemonCard")!.appendChild(displayPokemonName(getPokemonName(data)));
  document.getElementById("pokemonCard")!.appendChild(displayPokemonAbilities(getPokemonAbilities(data)));
  document.getElementById("pokemonCard")!.appendChild(displayPokemonAbilitiesDetail(getPokemonAbilities(data)));
  
  document.getElementById("pokemonCard")!.appendChild(displayPokemonStatistics(getPokemonStats(data)));
  document.getElementById("pokemonCard")!.appendChild(displayPokemonStatisticsDetials(getPokemonStats(data)));
}

export { appendData, displayPokemonAbilities, displayPokemonAbilitiesDetail, displayPokemonImage, displayPokemonName, displayPokemonNameHeading, displayPokemonStatistics, displayPokemonStatisticsDetials}