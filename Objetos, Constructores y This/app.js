class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    // Los metodos estaticos no requieren crear una nueva instancia
    static bienvenida() {
        return `Bienvenido al cajero`
    }
}

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo) {
        // va hacia el constructor padre
        super(nombre, saldo);
        // no existen en el constructor padre
        this.telefono = telefono;
        this.tipo = tipo;
    }

    static bienvenida() {
        return `Bienvenido al cajero de empresas`
    }
}

const empresa = new Empresa('empresa1', 10000,123123,'Construccion');


console.log(Empresa.bienvenida());
console.log(Cliente.bienvenida());
