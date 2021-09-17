let numeros=[]
for (let i = 0; i < 10 ; i++) {
   numeros.push(i+1)
}
//0console.log(numeros);

let numeros2 = numeros.map(numero => multiplicador(numero))
console.log(numeros2);

function multiplicador(numero){
    console.log(numero)
    return numero * 2
}
console.log("Numeros mayores a 5: ", numeros2.filter(numeros => numeros >5))
console.log("Primer numero mayor a 10: ", numeros2.find(numero => numero >10))


/*
let numerosmultiplicados =[]

function multiplicadorForEach(numero){
    console.log(numero)
    const numeroMultiplicar = numero*2
    //numerosmultiplicados.push(numero * 2)
    numerosmultiplicados = [...numerosmultiplicados,numeroMultiplicar]
}
*/

/*
let numeros2 = numeros.map(function(numero) 
{
    console.log(numero)
    return numero * 2
})
console.log(numeros2);
*/

/*
numeros.forEach(numero => multiplicadorForEach(numero))
console.log(numerosmultiplicados)
*/