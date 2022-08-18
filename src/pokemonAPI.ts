import { newPokemonData, callAPI} from './pokemonData';
import { clearFields } from "./clearFields";
import { appendData  } from './displayPokemon';

let searchQuery = <HTMLInputElement> document.getElementById("search");
let objectArr: object[] = [];

//--------------------------------------------------------------------------------
const button = <HTMLElement> document.getElementById("searchButton");

  button.addEventListener("click", async () => { 
    let response: Response = await fetch(
      callAPI(searchQuery)
      );

      if (response.ok === true)  {
      document.getElementById("errorMessage")!.innerText = "";
      let data = await response.json();
      
      appendData(data);
        objectArr.push(newPokemonData(data));
        localStorage.setItem("objectArr", JSON.stringify(objectArr));
    }
    else {
       document.getElementById("errorMessage")!.innerText =
       "Oops! Please double check your entry is a pokemon name or index number and try again.";
      }
  });

//------------------------------------------------------------------------------


let outLocalStorage = JSON.parse(<string> window.localStorage.getItem("objectArr"));

outLocalStorage.forEach( function(localStorageData: any): void {
  let pokemonCard: HTMLElement = <HTMLElement> document.getElementById("pokemonCard");
  pokemonCard.innerHTML += `<img src="${localStorageData.image}" class="pokemonImage">`;
  pokemonCard.innerHTML += `<h3 class="pokemonName">Name: </h3> `;
  pokemonCard.innerHTML += `<p class ="nameInformation"> ${localStorageData.pokemonName}</p>`;
  pokemonCard.innerHTML += `<h3 class="abilitiesHeading"> Abilities: </h3>`;
    for (let i = 0; i < localStorageData.abilities.length; i++) {
      let abName = localStorageData.abilities[i].ability.name;
      pokemonCard.innerHTML += `<p class="pokemonAbilities">${abName}</p>`;
    }
  pokemonCard!.innerHTML += `<h3 class="statsHeading"> Statistics: </h3>`;
    for (let i = 0; i < localStorageData.statistics.length; i++) {
      let statsName = localStorageData.statistics[i].stat.name;
      let statsAmount = localStorageData.statistics[i].base_stat;
      pokemonCard.innerHTML += `<p class="pokemonAbilities">${statsName}: ${statsAmount}</p>`;
    }
  });

//------------------------------------------------------------------------------

let clearAll = <HTMLElement> document.getElementById("clearAll");
  clearAll.addEventListener("click", function () {
    clearFields();
  });

//---------------------------------------------------------------------------