//Ejercicio 1
const usuario = { nombre: "Ana", edad: 16, suscripcion: "gratuita" };

const acceso = usuario.nombre >=18 ? "permitido" : "denegado"
const plan = usuario.suscripcion==="premium" ? "Premium" : "Gratuita"
const saludo = usuario.nombre != "" && "Hola" + usuario.nombre 

//Ejercicio 2
const config = {
  tema: "oscuro",
  idioma: "",
  notificaciones: true,
  usuarioAdmin: false
};

const idioma = config.idioma || "español";
const badge = config.usuarioAdmin && "Admin"; 
const notificaciones= config.notificaciones && "Notificaciones activas";
console.log (notificaciones);

//Ejercicio 3
const pelicula = {
  titulo: "Interstellar",
  director: "Christopher Nolan",
  año: 2014,
  duracion: 169,
  genero: "Ciencia ficción"
};

const {titulo, director, año} = pelicula;
const {duracion : duracionMinutos} = pelicula;
const {calificacion= "Sin calificar"} = pelicula;

function mostrarPelicula(){
    console.log (`${titulo}  (  ${año}  ) -Dir.  ${director}`)
};

//Ejercicio 4
const coordenadas = [40.7128, -74.0060, 10];
const colores = ["rojo", "verde", "azul", "amarillo"];

const {latitud, longitud, altitud} = coordenadas;
const [primero, , , ultimo] = colores;
const [primerElemento, ...resto] = colores

//Ejercicio 5
const base = { marca: "Samsung", modelo: "Galaxy S24", precio: 180000 };
const descuento = { precio: 150000, enOferta: true };

const copia= {...base};
const oferta= {...base, enOferta : true, precio: 150000};
const combinado= {...base, ...descuento};

const carrito = ["auriculares", "teclado"];

const carritoActualizado = {...carrito};

//Ejercicio 6

//Ejercicio 7
const equipo = [
  { id: 1, nombre: "Ana",   rol: "desarrolladora", activo: true,  salario: 95000 },
  { id: 2, nombre: "Luis",  rol: "diseñador",       activo: false, salario: 80000 },
  { id: 3, nombre: "Carla", rol: "desarrolladora",  activo: true,  salario: 102000 },
  { id: 4, nombre: "Pedro", rol: "qa",              activo: true,  salario: 75000 },
  { id: 5, nombre: "Marta", rol: "desarrolladora",  activo: false, salario: 98000 },
];

function presentar({nombre, rol}){
    return `${nombre} - ${rol}`
}

const estados= equipo.map ((persona)=> 
     
        ( {
            nombre: persona.nombre,
            estado: persona.activo ? "Activo" : "Inactivo"
        })
     
)


const desarrolladorasConBono= 
equipo.filter((persona)=> persona.rol === "desarrolladora" && persona.activo===true)
        .map(persona=>({...persona, salarioConBono: persona.salario+10000}))
console.log (desarrolladorasConBono)

function obtenerRol(persona){
    persona.nombre === "Ana" && "ADMIN" 
    persona.activo && persona.rol.toUpperCase()
    !=persona.activo && "Inactivo"
}