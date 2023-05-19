// calculo descuento
function getValueFromInput() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let cantidad = document.getElementById("inputCantidad").value;
    let descuento = document.getElementById("inputDescuento").value;

    // calcular el descuento
    let descuentoAplicado = cantidad * 200 * descuento;

    // restar el descuento al total
    let total = cantidad * 200 - descuentoAplicado;

    document.getElementById("a-pagar").textContent = total.toFixed(2);
}