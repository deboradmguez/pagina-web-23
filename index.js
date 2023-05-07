// funcion boton subir
const btnSubirArriba = document.querySelector('.btn-subir');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        btnSubirArriba.classList.remove('d-none');
    } else {
        btnSubirArriba.classList.add('d-none');
    }
});

btnSubirArriba.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

