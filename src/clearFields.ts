export let clearFields = () => {
  document.getElementById("pokemonCard")!.innerText = "";
  document.getElementById("errorMessage")!.innerText = "";
  localStorage.clear();
}