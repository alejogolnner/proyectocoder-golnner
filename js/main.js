const tiposRellenoPrecios = {
    "Dulcedeleche": 800,
    "Crema": 950,
    "Ganachedechocolate": 1000,
    "Frutillas": 1300,
    "Duraznos": 1900
};

const tiposBizcochueloPrecios = {
    "Chocolate": 5000,
    "Vainilla": 4500
};

// Valores de tamanios de tortas
const tamaniosTortaPrecios = {
    18 : 3000,
    20 : 4000,
    24 : 500
}

// Función para almacenar detalles de torta en localStorage
const guardarDetallesTorta = (detalles) => {
    localStorage.setItem('detallesTorta', JSON.stringify(detalles));
}

// Función para obtener detalles de torta almacenados en localStorage
const obtenerDetallesTorta = () => {
    const detallesGuardados = localStorage.getItem('detallesTorta');
    return detallesGuardados ? JSON.parse(detallesGuardados) : null;
}

// Función para cargar detalles de torta en el formulario
const cargarDetallesEnFormulario = () => {
    const detallesGuardados = obtenerDetallesTorta();
    if (detallesGuardados) {
        document.getElementById("tamanioTorta").value = detallesGuardados.tamanioTorta;
        document.getElementById("tipoBizcochuelo").value = detallesGuardados.tipoBizcochuelo;
        document.getElementById("cantRelleno").value = detallesGuardados.cantRelleno;
        
        const tipoRellenoOptions = document.getElementById("tipoRelleno").options;
        for (const relleno of detallesGuardados.tipoRellenos) {
            const option = Array.from(tipoRellenoOptions).find(option => option.value === relleno);
            if (option) {
                option.selected = true;
            }
        }

        recalcularTotal();
    }
}

window.addEventListener('load', cargarDetallesEnFormulario);

document.getElementById("calcular-button").addEventListener("click", () => {

    // Guardar detalles de la torta en localStorage
    const tamanioTorta = parseInt(document.getElementById("tamanioTorta").value);
    const tipoBizcochuelo = document.getElementById("tipoBizcochuelo").value;
    const cantRelleno = parseInt(document.getElementById("cantRelleno").value);
    const tipoRellenoOptions = document.getElementById("tipoRelleno").options;
    const tipoRellenos = Array.from(tipoRellenoOptions).filter(option => option.selected).map(option => option.value);

    const detallesTorta = {
        tamanioTorta,
        tipoBizcochuelo,
        cantRelleno,
        tipoRellenos,
    };

    guardarDetallesTorta(detallesTorta);
});


// Función para calcular la ganancia
const calcularGanancia = (total) => {
    let costoParcial = total - (total * 0.5);
    let costoTotal = costoParcial + (total * 0.195);
    let ganancia = total - costoTotal;
    return ganancia.toFixed(2);
}

// Actualizar el total acumulado en la interfaz
const actualizarTotal = (total) => {
    document.getElementById("total-acumulado").textContent = "$" + total;
}

// Función para recalcular el total cuando se cambian los valores en el formulario
const recalcularTotal = () => {
    const tamanioTorta = parseInt(document.getElementById("tamanioTorta").value);
    const tipoBizcochuelo = document.getElementById("tipoBizcochuelo").value;
    const cantRelleno = parseInt(document.getElementById("cantRelleno").value);
    const tipoRellenoOptions = document.getElementById("tipoRelleno").options;
    const tipoRellenos = Array.from(tipoRellenoOptions).filter(option => option.selected).map(option => option.value);

    let acumulado = tamaniosTortaPrecios[tamanioTorta];
    acumulado += tiposBizcochueloPrecios[tipoBizcochuelo];
    for (const relleno of tipoRellenos) {
        if (tiposRellenoPrecios[relleno]) {
            acumulado += tiposRellenoPrecios[relleno];
        }
    }

    actualizarTotal(acumulado);
}

// Escuchar cambios en los elementos del formulario
document.getElementById("tamanioTorta").addEventListener("change", recalcularTotal);
document.getElementById("tipoBizcochuelo").addEventListener("change", recalcularTotal);
document.getElementById("cantRelleno").addEventListener("change", recalcularTotal);
document.getElementById("tipoRelleno").addEventListener("change", recalcularTotal);

document.getElementById("calcular-button").addEventListener("click", () => {
    const tamanioTorta = parseInt(document.getElementById("tamanioTorta").value);
    const tipoBizcochuelo = document.getElementById("tipoBizcochuelo").value;
    const cantRelleno = parseInt(document.getElementById("cantRelleno").value);
    const tipoRellenoOptions = document.getElementById("tipoRelleno").options;
    const tipoRellenos = Array.from(tipoRellenoOptions).filter(option => option.selected).map(option => option.value);

    // Calcular el costo total acumulado de la torta
    let acumulado = tamaniosTortaPrecios[tamanioTorta];
    acumulado += tiposBizcochueloPrecios[tipoBizcochuelo];
    for (const relleno of tipoRellenos) {
        if (tiposRellenoPrecios[relleno]) {
            acumulado += tiposRellenoPrecios[relleno];
        }
    }

    // Mostrar el costo total acumulado de la torta
    actualizarTotal(acumulado);

    // Calcular y mostrar la ganancia total
    const ganancia = calcularGanancia(acumulado);
    alert("La ganancia es de $" + ganancia);
});

