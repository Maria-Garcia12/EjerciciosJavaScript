
function CuentaBancaria (nombreTitular,numeroCuenta,apellidoTitular,saldo,movimientos,debito,credito){
    this.nombreTitular = nombreTitular;
    this.numeroCuenta = numeroCuenta;
    this.apellidoTitular = apellidoTitular;
    this.saldo = saldo;
    this.movimientos = movimientos;
    this.debito = debito;
    this.credito = credito
    }

let metodos = {
    nombreCompleto : function(cuenta){
        return "Nombre Completo : " + cuenta.nombreTitular + " " + cuenta.apellidoTitular;
    },
    debitarDinero : function(cuenta, debitar){
        let nuevoSaldo = cuenta.saldo - debitar
        if ( nuevoSaldo < 0 ){
            return "Saldo Insuficiente"
        }
        cuenta.saldo = nuevoSaldo
        let transaccion = " Debito: " +  debitar
        this.agregarMovimiento(cuenta,transaccion)
        cuenta.debito += debitar
        return transaccion
    },
    acreditarDinero : function(cuenta, acreditar){
       if(acreditar < 1000){
       return "No se permiten acreditaciones menores a:  1.000 "
    }
      cuenta.saldo = cuenta.saldo + acreditar
      let transaccion = " Acredito: " +  acreditar
      this.agregarMovimiento(cuenta,transaccion)
      cuenta.credito += acreditar
      return transaccion
    },
    mostrarSaldo : function(cuenta){
      let transaccion = " Consulta Saldo: " +  cuenta.saldo
      this.agregarMovimiento(cuenta,transaccion)
      return cuenta.saldo
     },
    mostrarMovimientos : function (cuenta){
        return "Movimientos: " + cuenta.movimientos
    },
    agregarMovimiento : function (cuenta,transacciones){
     cuenta.movimientos.push(transacciones)
    },
    mostrarMovimientosDebito : function (cuenta){
          return cuenta.movimientos.filter(debito => debito.includes("Debito"))
    },
    mostrarMovimientosCredito : function (cuenta){
        return cuenta.movimientos.filter(credito => credito.includes("Acredito"))
    },

}

let cuenta1 = new CuentaBancaria("Maria", 3823, "Garcia", 2000, [], 0, 0)
let cuenta2 = new CuentaBancaria("Sebastian", 5673, "Garcia", 4000, [], 0, 0)
let cuenta3 = new CuentaBancaria("Soarancy", 9873, "Garcia", 6000, [], 0, 0)


let cuentas = []
cuentas.push(cuenta1)
cuentas.push(cuenta2)
cuentas.push(cuenta3)


 cuentas.forEach (iterador =>{
 console.log(metodos.nombreCompleto(iterador))
 console.log(" Saldo Inicial: " + metodos.mostrarSaldo(iterador))
 console.log(metodos.debitarDinero(iterador, 1000))
 console.log(metodos.debitarDinero(iterador, 1000))
 console.log(metodos.acreditarDinero(iterador, 2000))
 console.log(metodos.acreditarDinero(iterador, 1000))
 console.log(" Saldo Final: " + metodos.mostrarSaldo(iterador))
 console.log(metodos.mostrarMovimientos(iterador))
 console.log("Movimientos Credito:", metodos.mostrarMovimientosCredito(iterador))
 console.log("Movimientos Debito:", metodos.mostrarMovimientosDebito(iterador))
 console.log("Total de Movimientos Credito: " + iterador.credito)
 console.log("Total de Movimientos Debito: " + iterador.debito)
})













