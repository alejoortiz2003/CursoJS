import { Cliente } from './cliente.js';

// Exportar variables
export const nombreEmpresa = 'Udemy';
export let ahorro = 2000000000;
export const categoria = 'Aprendizaje'

// Exportar funciones
export function mostrarInformacion(nombre, ahorro, categoria) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro} - categoria: ${categoria}`;
}

// Utilizar la clase del modulo cliente

export class Empresa extends Cliente {
    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro);
        this.categoria = categoria;
    }
    mostrarInformacion(nombre, ahorro, categoria) {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - categoria: ${this.categoria}`;
    }
}

