//Promesa Fetch

import fetch from 'node-fetch'

/* 1 

fetch(" https://pokeapi.co/api/v2/pokemon?limit=15") 
.then(response => response.json())
.then(data => console.log(data))

*/

/* 2

let pokemonFav = "bulbasaur";
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonFav}`) 
.then(response => response.json())
.then(data => console.log("El nombre de mi pokemon Favorito es : " + data.name))

*/

async function traerDatos(){
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15")
    let data = await response.json()
    let results = await data.results
    let nombre = await results.map(pokemonNombre => (pokemonNombre.name))
    
    nombre.map(async cadaNombre => {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${cadaNombre}`)
        let data = await response.json()
        if (data.weight > 150) {
            console.log("Pokemon:", data.name, ", Peso:", data.weight)
        }
    })   
}
  
  traerDatos()
