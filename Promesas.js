//Promesa Fetch

import fetch from 'node-fetch'


/*
fetch("https://api.mercadolibre.com/sites/MLA/search?q=Motorola#json")
.then(response => response.json()) // el .json esta transformando la data de la api a tipo json y response ya es una promesa
.then(data => data.results) // aca seguimos con la promesa que dejo la anterior linea y data nos bota toda la inf.. cada inf tiene un results que es al que vamos a acceder
.then(products => products.map(productos => console.log(productos.title))) //como results es un array entonces tenemos que volver a traernos ese array que devuelve arriba y hacerle map para acceder a los atributos de ese array
*/


//Promesa Async await
 
/*
async function traerDatos(){
    let response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=Motorola#json")
    let data = await response.json()
    let results = await data.results
    let title = results.map(productos =>console.log(productos.title))
  }
 traerDatos(); 
  
 console.log("Maria") // este se ejecuta primero porque es sincronico lo que quiere decir que esta en la primera cola 
*/


// Promesa Fetch con query

/*

fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
.then(response => response.json())// el .json esta transformando la data de la api a tipo json y response ya es una promesa
.then(data => console.log(data));

*/

/*
let miPromesa = new Promise ((resolve,reject)=>{
    setTimeout(()=> resolve ("Anda"), 1000) // con el resolve se obliga a resolver la promesa
   // setTimeout(() => reject ("No Anda"), 1000)
  })
  .then(data => console.log(data))// data es lo que hace el resolve de arriba
  .catch(err => console.log(`Estoy en el catch ${err}`))
*/
  

/*  Parametros 
function cualquiera(a,b){
  console.log(a,b)
}

cualquiera(1,2);
*/

//operator rest

/*
function cualquiera(a,b,...datos){// datos se convierte en un array osea la response es : 1 2 []
  console.log(a,b,datos)
}
cualquiera(1,2,3,4,5);
*/

/*
function cualquiera(a,b,...datos){// datos se convierte en un array aca se puede meter cualquier tipo de datos
    let sumatoria = datos.reduce((valorAnterior, ValorSiguiente)=>{ //reduce es un funcion de un array en este caso datos es un array si no no funcionaria
      //reduce guarda el valor anterior y el dsiguiente 
      return valorAnterior+ValorSiguiente
   
    },0)// el cero se significa que reduce inicia en o si necesitamos que empiece en 1 pues se pone uno
     
     console.log(sumatoria)
   }
   cualquiera(1,2,3,4,5);
*/

/*

// ... es crear una copia de un array o un objeto
let array1 =[1,2,3]
let array2 =[...array1]

// se copia las referencias de los array
let objecto1 = {name:"Maria"}
let objecto2 = {...objecto1, apellido:"Garcia"}

objecto1.edad = 24

console.log(objecto1)
console.log(objecto2)

*/

