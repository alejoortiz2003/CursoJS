import { nombreCliente, ahorro, mostrarInformacion, Cliente } from './cliente.js';
import { nombreEmpresa, ahorro as ahorroEmpresa, categoria, mostrarInformacion as inEmpresa, Empresa} from './empresa.js'

// console.log(nombreCliente);
// console.log(ahorro);

// const info = mostrarInformacion(nombreCliente, ahorro);
//const infoEmpresa = inEmpresa(nombreEmpresa, ahorroEmpresa,categoria);
// console.log(info);

// import * as clientes from './cliente.js';
// console.log(clientes);

// utilizar la clase
let cliente = new Cliente(nombreCliente, ahorro);
// console.log(cliente);
console.log(cliente.mostrarInformacion());

// console.log(nombreCliente);
// console.log(nombreEmpresa);
// console.log(ahorro);
// console.log(ahorroEmpresa);
// console.log(categoria);
// console.log(info);
// console.log(infoEmpresa);

let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoria);
console.log(empresa.mostrarInformacion());
