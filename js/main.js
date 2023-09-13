const TIPO_RELLENO_1 = "DULCEDELECHE";
const TIPO_RELLENO_2 = "CREMA";
const TIPO_RELLENO_3 = "GANACHEDECHOCOLATE";
const TIPO_RELLENO_4 = "FRUTILLAS";
const TIPO_RELLENO_5 = "DURAZNOS";
const VALOR_RELLENO_1 = 1000;
const VALOR_RELLENO_2 = 800;
const VALOR_RELLENO_3 = 950;
const VALOR_RELLENO_4 = 1300;
const VALOR_RELLENO_5 = 1900;
const TIPO_BIZCOCHUELO_1 = "CHOCOLATE"
const TIPO_BIZCOCHUELO_2 = "VAINILLA"
const VALOR_BIZCOCHUELO_1 = 5000
const VALOR_BIZCOCHUELO_2 = 4500
const VALOR_TAMAÑO_TORTA_24 = 5000
const VALOR_TAMAÑO_TORTA_20 = 4000
const VALOR_TAMAÑO_TORTA_18 = 3000

let acumulado = 0;

// Calculadora de Ganancia
function calcularGanancia(total) {
    let costoParcial = total - (total * 0.5);  // Resta el 50% del total
    let costoTotal = costoParcial + (total * 0.195);  // Suma el 19.5% del total
    let ganancia = total - costoTotal;
    console.log("La ganancia es de $" + ganancia.toFixed(2));  //toFixed(2) para mostrar dos decimales en la ganancia
}

// Solicitar al usuario que elija el tamaño de la torta
let tamañoTorta = parseInt(prompt("Elija el tamaño de su torta entre las opciones en cm: 24, 20, 18"))

// Validar que el tamaño elegido esté dentro de las opciones válidas
while (tamañoTorta !== 18 && tamañoTorta !== 20 && tamañoTorta !== 24) {
    tamañoTorta = parseInt(prompt("El tamaño elegido no es una opción válida, por favor elija el tamaño en cm entre las opciones: 24, 20, 18"));
}

// Agregar el costo del tamaño de la torta seleccionado al costo acumulado
switch (tamañoTorta) {
    case 18:
        acumulado += VALOR_TAMAÑO_TORTA_18;
        break;
    case 20:
        acumulado += VALOR_TAMAÑO_TORTA_20;
        break;
    case 24:
        acumulado += VALOR_TAMAÑO_TORTA_24;
        break;
}

// Solicitar al usuario que elija el tipo de bizcochuelo
let tipoBizcochuelo = prompt("Elija el tipo de bizcochuelo entre las opciones: chocolate o vainilla")

// Validar que el tipo de bizcochuelo elegido esté dentro de las opciones válidas
while (tipoBizcochuelo.trim().toUpperCase() !== TIPO_BIZCOCHUELO_1 && tipoBizcochuelo.trim().toUpperCase() !== TIPO_BIZCOCHUELO_2) {
    tipoBizcochuelo = prompt("El tipo de bizcochuelo elegido no está disponible, por favor elija entre una de las opciones: chocolate o vainilla");
}

// Agregar el costo del tipo de bizcochuelo seleccionado al costo acumulado
switch (tipoBizcochuelo.trim().toUpperCase()) {
    case TIPO_BIZCOCHUELO_1:
        acumulado += VALOR_BIZCOCHUELO_1;
        break;
    case TIPO_BIZCOCHUELO_2:
        acumulado += VALOR_BIZCOCHUELO_2;
        break;
}

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

    // Utilizar un switch para agregar el costo del relleno seleccionado al costo acumulado
    switch (tipoRelleno) {
        case TIPO_RELLENO_1:
            acumulado += VALOR_RELLENO_1;
            break;
        case TIPO_RELLENO_2:
            acumulado += VALOR_RELLENO_2;
            break;
        case TIPO_RELLENO_3:
            acumulado += VALOR_RELLENO_3;
            break;
        case TIPO_RELLENO_4:
            acumulado += VALOR_RELLENO_4;
            break;
        case TIPO_RELLENO_5:
            acumulado += VALOR_RELLENO_5;
            break;
        default:
            i--; // Decrementamos i para que se repita la iteración
            alert("El tipo de relleno ingresado no es válido. Por favor, elija uno de los tipos disponibles.");
            break;
    }
}

// Mostrar el costo total acumulado de la torta
alert("El costo total de su torta con " + cantRelleno + " rellenos es de: $" + acumulado);

//Mostrar la ganancia total
calcularGanancia(acumulado)