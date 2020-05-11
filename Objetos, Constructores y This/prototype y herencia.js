function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
// // Crear un Prototype
// Cliente.prototype.tipoCliente = function(){
//     let tipo;
//     if(this.saldo > 1000) {
//         tipo = 'Gold';
//     } else if(this.saldo > 500) {
//         tipo = 'Platinum';
//     } else {
//         tipo = 'Normal';
//     }
//     return tipo;
// }
// Prototipo que imprime saldo y nombre
// Cliente.prototype.nombreClienteSaldo = function(){
//     return `Nombre: ${this.nombre}, Tu saldo es de ${this.saldo}, Tipo cliente: ${this.tipoCliente()}`
// }
Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Tu saldo es de ${this.saldo}`
}
const cliente1 = new Cliente('Pedro', 100);

// // Retirar saldo
// Cliente.prototype.retirarSaldo = function(retiro) {
//     return this.saldo -= retiro;
// }

// Banca para empresas
function Empresa(nombre, saldo, telefono, tipo) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
    this.tipo = tipo;
}
Empresa.prototype = Object.create(Cliente.prototype);
const empresa = new Empresa('Udemy', 10000000, 123123, 'Educacion');


// cliente1.retirarSaldo(100);
console.log(cliente1.nombreClienteSaldo());
console.log(empresa.nombreClienteSaldo());
