// Agregar a Local Storage se utiliza setItem
localStorage.setItem('nombre', 'David');

// Session Storga se utiliza set Item
sessionStorage.setItem('nombre', 'David');

// Eliminar de Local Storage se utiliza removeItem
//localStorage.removeItem('nombre');

// Para eliminar todo el local storage
localStorage.clear();

const nombre = localStorage.getItem('nombre');
console.log(nombre)
