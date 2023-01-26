const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

(async function getData(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto/");
    if(response.ok){
        const result = await response.json();
        console.log(result);
    } else {
        console.log("Nie udało się nic zrobić");
    }
})();