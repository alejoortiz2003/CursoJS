// MAPS

// let cliente = new Map();
// cliente.set('nombre', 'Karen');
// cliente.set('tipo', 'Premium');
// cliente.set('saldo', 3000);

// acceder a los valores

// console.log(cliente.get('nombre'));
// console.log(cliente.get('tipo'));
// console.log(cliente.get('saldo'));

// Metodos para los Maps
// Tamano del map
// console.log(cliente.size);
// Si queremos comprobar que un valor existe
// console.log(cliente.has('apellido'));
// Si queremos acceder a los valores
// console.log(cliente.get('nombre'));
//Borrar un elemento del map
// cliente.delete('nombre');
// Para limpiar el Map
// cliente.clear();
// console.log(cliente);

// Pasar propiedades por Default
const paciente = new Map(
    [['nombre', 'paciente'],
     ['habitacion', 'No definido']]
);

paciente.set('nombre', 'Antonio');
paciente.set('habitacion', 400);
paciente.set('habitacion', 500);

// for each a un map
paciente.forEach((datos, index) => {
    console.log(`${index}: ${datos}`)
});


console.log(paciente);