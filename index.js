// funcion boton subir
const btnSubirArriba = document.querySelector('.btn-subir');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        btnSubirArriba.classList.remove('d-none');
    } else {
        btnSubirArriba.classList.add('d-none');
    }
});

btnSubirArriba.addEventListener('click', (clickEvent) => {
    clickEvent.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// calculo descuento
function getValueFromInput() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var cantidad = document.getElementById("inputCantidad").value;
    var descuento = document.getElementById("inputDescuento").value;

    // descuento = parseFloat(descuento);

    // Calcular el descuento
    var descuentoAplicado = cantidad * 200 * descuento;

    // Restar el descuento al total
    var total = cantidad * 200 - descuentoAplicado;

    document.getElementById("a-pagar").textContent = total.toFixed(2);
}