// For loops
// for(let i = 0; i < 10; i++){
//     console.log(`Numero ${i}`);
// }
// for(let i = 0; i < 10; i++){
//     if(i===5){
//         console.log(`Voy en el ${i}`)
//         continue;
//     }
//     console.log(`${i}`)
// }
// for(let i = 0; i < 10; i++){
//     if(i===5){
//         console.log(`Voy en el ${i}`)
//         break;
//     }
//     console.log(`${i}`)
// }
// for(let i = 0; i < 10; i++){
//     if(i % 2 == 0){
//         console.log(`El numero ${i} es par`)
//     } else {
//         console.log(`El numero ${i} es impar`)
//     }
// }
const arregloProdcutos = ['Camisa', 'Boleto', 'Guitarra', 'Disco'];

console.log(arregloProdcutos.length);

for(let i = 0; i < arregloProdcutos.length; i++){
    console.log(`Tu Producto ${arregloProdcutos[i]} fue agregado`);
}
