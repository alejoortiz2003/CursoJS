class Cliente {
    constructor(nombre, apellido, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }

    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    tipoCliente() {
        let tipo;
        if(this.saldo > 10000) {
            tipo = 'Gold';
        } else if(this.saldo >5000) {
            tipo = 'Platinum';
        } else {
            tipo = 'Normal';
        }
        return tipo;
    }

    retirarSaldo(retiro) {
        return this.saldo -= retiro;
    }
    // Los metodos estaticos no requieren crear una nueva instancia
    static bienvenida() {
        return `Bienvenido al cajero`
    }
}


const maria = new Cliente('Maria', 'Perez', 10000);

maria.retirarSaldo(100);
console.log(Cliente.bienvenida());
