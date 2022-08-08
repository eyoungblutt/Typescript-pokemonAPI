import { getPokemonImage, getPokemonName, getPokemonStats, getPokemonAbilities} from './pokemonData';
import { clearFields } from "./clearFields";
import { displayPokemonAbilities, displayPokemonStatistics, displayPokemonName, displayPokemonImage,} from './displayPokemon';

let searchQuery = document.getElementById("search");
let objectArr: any = [];

//--------------------------------------------------------------------------------
function callAPI() {
  document
    .getElementById("searchButton")!
    .addEventListener("click", async () => { // GK: How will you unit test all this code if it's inside a click event listener?
      let response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchQuery.value.toLowerCase()}`
      );
      if (response.ok === true) {
        let data = await response.json();

        document.getElementById("errorMessage")!.innerText = "";
        
        displayPokemonImage(getPokemonImage(data));
        displayPokemonName(getPokemonName(data));
        displayPokemonAbilities(getPokemonAbilities(data));
        displayPokemonStatistics(getPokemonStats(data));

        let newPokemonData = (image: string, pokemonName: string, abilities: string, statistics: string) => {
          image= data.sprites.front_default,
          pokemonName= data.name,
          abilities= data.abilities,
          statistics= data.stats
        };

        objectArr.push(newPokemonData);
        localStorage.setItem("objectArr", JSON.stringify(objectArr));
      } else {
        document.getElementById("errorMessage")!.innerText =
          "Oops! Please double check your entry is a pokemon name or index number and try again.";
      }
    });
};

callAPI();
//------------------------------------------------------------------------------


let outLocalStorage = JSON.parse( window.localStorage.getItem("objectArr")); 

outLocalStorage.forEach( function(localStorageData: any) {
  let pokemonCard: HTMLElement | null = document.getElementById("pokemonCard");
  pokemonCard!.innerHTML += `<img src="${localStorageData.image}" class="pokemonImage">`;

  pokemonCard!.innerHTML += `<h3 class="pokemonName">Name: </h3> `;
  pokemonCard!.innerHTML += `<p class ="nameInformation"> ${localStorageData.pokemonName}</p>`;

  pokemonCard!.innerHTML += `<h3 class="abilitiesHeading"> Abilities: </h3>`;
    for (let i = 0; i < localStorageData.abilities.length; i++) {
      let abName = localStorageData.abilities[i].ability.name;
      pokemonCard!.innerHTML += `<p class="pokemonAbilities">${abName}</p>`;
    }

  pokemonCard!.innerHTML += `<h3 class="statsHeading"> Statistics: </h3>`;
    for (let i = 0; i < localStorageData.statistics.length; i++) {
      let statsName = localStorageData.statistics[i].stat.name;
      let statsAmount = localStorageData.statistics[i].base_stat;
      pokemonCard!.innerHTML += `<p class="pokemonAbilities">${statsName}: ${statsAmount}</p>`;
    }
  });

//------------------------------------------------------------------------------

let clearAll = document.getElementById("clearAll");
window.onload = function () { // GK: Why add this event listener onLoad?
  clearAll!.addEventListener("click", function () {
    clearFields();
  });
};

//---------------------------------------------------------------------------