let pokemones = [ 
     { nombre: 'pikachu', poder: 12 },
     { nombre: 'bulbasaur', poder: 6 },
     { nombre: 'charizard', poder: 19 },
     { nombre: 'squirtle', poder: 3 },
     { nombre: 'metwo', poder: 6 }, 
]
console.log("Pokemones con poderes menores a 10:", pokemones.filter(pokemon => pokemon.poder < 10).map(pokemonFiltrado => pokemonFiltrado.nombre))



