export let clearFields = (): void => {
  document.getElementById("pokemonCard")!.innerText = "";
  document.getElementById("errorMessage")!.innerText = "";
  localStorage.clear();
}