const productos = [
  { id: 1, nombre: "Auriculares Bluetooth",  categoria: "Electrónica", precio: 15000, stock: 8,  activo: true  },
  { id: 2, nombre: "Teclado Mecánico",       categoria: "Electrónica", precio: 22000, stock: 0,  activo: true  },
  { id: 3, nombre: "Silla Ergonómica",       categoria: "Muebles",     precio: 85000, stock: 3,  activo: true  },
  { id: 4, nombre: "Lámpara de Escritorio",  categoria: "Muebles",     precio: 9500,  stock: 12, activo: false },
  { id: 5, nombre: "Mouse Inalámbrico",      categoria: "Electrónica", precio: 7800,  stock: 20, activo: true  },
  { id: 6, nombre: "Monitor 27\"",           categoria: "Electrónica", precio: 120000,stock: 2,  activo: true  },
  { id: 7, nombre: "Alfombra de Escritorio", categoria: "Muebles",     precio: 4200,  stock: 0,  activo: false },
  { id: 8, nombre: "Webcam HD",              categoria: "Electrónica", precio: 18000, stock: 5,  activo: true  },
];

//1

const soloNombres = productos.map (function(producto){
    return producto.nombre;
});
console.log (soloNombres);

//2

const preciosConIVA= productos.map(function(producto){
  precio= Math.round(producto.precio * 1.21)
  return {nombre: producto.nombre, precioFinal: precio};
})
console.log (preciosConIVA);

//3
const productosCategoria= productos
          .filter(producto => producto.categoria == "Muebles")
          .map(function(producto){
            return producto.nombre
          })
console.log (productosCategoria);

//4
const productoEncontrado = productos.find((producto) => producto.id === 6)                      
console.log (productoEncontrado.nombre + "-$" + productoEncontrado.precio);

//5
const productoVerificado = productos.find((producto) => producto.nombre.includes("Mouse"))

if(productoVerificado){
  console.log( `Encontrado: ${productoVerificado.nombre}`)
}else {
 console.log("No encontrado")
}

//6
const mayorA100 = productos.some(function(producto){return producto.precio >= 100000})
console.log(mayorA100);

const todosId= productos.every(function(producto){return producto.id != null})
console.log(todosId);

const inactivo= productos.some(function(producto){return producto.activo === false})
console.log(inactivo);

const electronica= productos.filter(function(producto){producto.categoria==="Electrónica"})
                            .every(function(producto){producto.stock>0})
console.log(electronica);

//7
const valorTotal= productos.reduce(function(acumulador, producto){
  return acumulador + (producto.precio * producto.stock)
}, 0)
console.log(valorTotal);

//8
const encadenamiento= productos
                      .filter(function(producto){return producto.activo==true})
                      .filter(function(producto){return producto.stock>0})
                      .filter(function(producto){return producto.precio<20000})
                      .map(function(producto){return producto.nombre})
console.log(encadenamiento);

//9
const productoCategoria= productos
  .filter(function(producto){return producto.activo==true})
  .reduce(function(acumulador, producto){
    return acumulador + producto.stock
  }, 0)
  .map(function(producto){return `${producto.categoria}: ${acumulador}`})

console.log(productoCategoria);