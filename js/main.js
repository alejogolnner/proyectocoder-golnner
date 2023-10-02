const TIPOS_RELLENO = ["DULCEDELECHE", "CREMA", "GANACHEDECHOCOLATE", "FRUTILLAS", "DURAZNOS"];
const VALORES_RELLENO = [800, 950, 1000, 1300, 1900];
const TIPOS_BIZCOCHUELOS = ["CHOCOLATE", "VAINILLA"];
const VALORES_BISCOCHUELOS = [5000, 4500];
const VALORES_TAMAÑOS_TORTAS = [5000, 4000, 3000];

let acumulado = 0;

// Calculadora de Ganancia
const calcularGanancia = (total) => {
    let costoParcial = total - (total * 0.5);
    let costoTotal = costoParcial + (total * 0.195);
    let ganancia = total - costoTotal;
    console.log("La ganancia es de $" + ganancia.toFixed(2));
}

// Solicitar al usuario que elija el tamaño de la torta
let tamañoTorta = parseInt(prompt("Elija el tamaño de su torta entre las opciones en cm: 24, 20, 18"));

// Validar que el tamaño elegido esté dentro de las opciones válidas
while (![18, 20, 24].includes(tamañoTorta)) {
    tamañoTorta = parseInt(prompt("El tamaño elegido no es una opción válida, por favor elija el tamaño en cm entre las opciones: 24, 20, 18"));
}

// Agregar el costo del tamaño de la torta seleccionado al costo acumulado
acumulado += VALORES_TAMAÑOS_TORTAS[tamañoTorta / 2 - 9];

// Solicitar al usuario que elija el tipo de bizcochuelo
let tipoBizcochuelo = prompt("Elija el tipo de bizcochuelo entre las opciones: chocolate o vainilla");

// Validar que el tipo de bizcochuelo elegido esté dentro de las opciones válidas
while (!TIPOS_BIZCOCHUELOS.includes(tipoBizcochuelo.trim().toUpperCase())) {
    tipoBizcochuelo = prompt("El tipo de bizcochuelo elegido no está disponible, por favor elija entre una de las opciones: chocolate o vainilla");
}

// Agregar el costo del tipo de bizcochuelo seleccionado al costo acumulado
acumulado += VALORES_BISCOCHUELOS[TIPOS_BIZCOCHUELOS.indexOf(tipoBizcochuelo.trim().toUpperCase())];

// Solicitar al usuario la cantidad de rellenos deseada
let cantRelleno = parseInt(prompt("Ingrese la cantidad de rellenos que desea para su torta (mínimo 1 y máximo 5)"));

// Validar que la cantidad de rellenos esté dentro del rango correcto
while (cantRelleno <= 0 || cantRelleno > 5 || isNaN(cantRelleno)) {
    cantRelleno = parseInt(prompt("La cantidad de rellenos ingresada es inválida. Por favor, ingrese una cantidad de rellenos entre 1 y 5:"));
}

// Utilizar un bucle for para iterar sobre la cantidad de rellenos ingresados
for (let i = 1; i <= cantRelleno; i++) {
    // Solicitar al usuario que elija un tipo de relleno
    let tipoRelleno = prompt("Elija el relleno entre las opciones: Dulce de leche, Crema, Ganache de chocolate, Frutillas, Duraznos");

    // Limpiar y convertir a mayúsculas para una comparación insensible a mayúsculas/minúsculas
    tipoRelleno = tipoRelleno.trim().toUpperCase().replace(/\s/g, "");

    if (TIPOS_RELLENO.includes(tipoRelleno)) {
        acumulado += VALORES_RELLENO[TIPOS_RELLENO.indexOf(tipoRelleno)];
    } else {
        i--; // Decrementamos i para que se repita la iteración
        alert("El tipo de relleno ingresado no es válido. Por favor, elija uno de los tipos disponibles.");
    }
}

// Mostrar el costo total acumulado de la torta
alert("El costo total de su torta con " + cantRelleno + " rellenos es de: $" + acumulado);

// Mostrar la ganancia total
calcularGanancia(acumulado);


//creo contructor de objetos para crear usuarios
class Usuario{
    constructor(name, surName, nickname, email, pasword){
        this.nombre = name;
        this.apellido = surName;
        this.apodo = nickname
        this.email = email;
        this.contraseña = pasword;
    }
    //retorno la funcion saludarUsuario para mostar el saludo en pantalla
    saludarUsuario = () => {
        return "Hola " + this.apodo + " bienvenido a la familia BENCHU!";
    }
}
//inicializo variables para que el usuario cree su propio usuario
let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
let apodo = prompt("Ingrese su apodo")
let email = prompt("Ingrese su email")
let contraseña = prompt("Cree su contraseña")

//con el constructor de objetos creo un usuario personalizado
const otroUsuario = new Usuario (nombre, apellido, apodo, email, contraseña)

//saludo al usuario
alert(primerUsuario.saludarUsuario())

//muestro en consola al usuario
console.log(primerUsuario);
