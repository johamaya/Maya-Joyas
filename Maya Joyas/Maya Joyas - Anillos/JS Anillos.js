const listaDePiezas = [
    {
        id: 1,
        imagen: "./Piezas/Anillo-SP-Estrellademar.jpg",
        nombre: "Anillo Estrella",
        precio: 1000,
        materiales: "Plata 950",
        // a agregar: boton agregar a la cesta
    },
    {
        id: 2,
        imagen: "./Piezas/Anillo-SP-Infinito.jpg",
        nombre: "Anillo Infinito",
        precio: 1000,
        materiales: "Plata 950",
    },
    {
        id: 3,
        imagen: "./Piezas/Anillo-SP-Hoja.jpg",
        nombre: "Anillo Hoja",
        precio: 1000,
        materiales: "Plata 950",
    },
    {
        id: 4,
        imagen: "./Piezas/Anillo-SP-Elefante.jpg",
        nombre: "Anillo Elefante",
        precio: 1000,
        materiales: "Plata 950",
    }
];

function crearTarjetaPieza(piezaACrear) {
    const contenedorDiv = document.createElement("div");
    const imagenImg = document.createElement("img");
    const nombreH3 = document.createElement("h3");
    const precioP = document.createElement("p");
    const materialesP = document.createElement("p");

    nombreH3.textContent = piezaACrear.nombre;
    precioP.textContent = "UYU $" + piezaACrear.precio;
    materialesP.textContent = "Materiales: " + piezaACrear.materiales;
    imagenImg.src = piezaACrear.imagen;

    imagenImg.classList.add("imagen-pieza");

    nombreH3.classList.add("nombre-pieza");

    precioP.classList.add("precio-pieza");

    materialesP.classList.add("materiales-pieza");

    contenedorDiv.appendChild(imagenImg);
    contenedorDiv.appendChild(nombreH3);
    contenedorDiv.appendChild(precioP);
    contenedorDiv.appendChild(materialesP);

    contenedorDiv.classList.add("tarjeta-pieza");

    const miMain = document.getElementsByTagName("main");

    miMain[0].appendChild(contenedorDiv);
}

listaDePiezas.map(function (piezaDeLaLista) {
    crearTarjetaPieza(piezaDeLaLista);
})


