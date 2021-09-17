function c (ram,cpu,disco,gpu){
    this.ram = ram;
    this.cpu = cpu;
    this.disco = disco;
    this.gpu = gpu;
    
    }

let computador1 = new c ("2Gb", "core 5", "500 Gb", true)
let computador2 = new c ("3Gb", "core 4", "600 Gb", false)
let computador3 = new c ("4Gb", "intel", "400 Gb", true)
let computador4 = new c ("6Gb", "athlon silver", "600 Gb", false)
let computador5 = new c ("7Gb", "core 3", "500 Gb", false)

let computadoras =[computador1,computador2,computador3,computador4,computador5]
let gpus = computadoras.filter(computadora => computadora.gpu === true)


console.log(computadoras)
console.log(gpus)











