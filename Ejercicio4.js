

function calcularLitroNafta (kilometros){
   return kilometros * 0.02
}
let kilometros = 2000
let litros = calcularLitroNafta(kilometros)
console.log("Se gastaron", litros, "litros de nafta en", kilometros, "km" )

    
function calcularPrecioNafta (precioNafta,litros){
   return precioNafta * litros
}
let precioNafta = 5000
console.log("El precio de los ", litros, "litros es de: ", calcularPrecioNafta(precioNafta,litros))







