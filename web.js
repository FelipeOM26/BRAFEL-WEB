// Obtén el elemento y la altura de la pantalla fuera del evento de scroll para mejorar el rendimiento
let animacion = document.getElementById('tit');
let tamañoDePantalla = window.innerHeight / 3.5;

window.addEventListener('scroll', function () {
    // Obtén la posición dentro del evento de scroll
    let posicion = animacion.getBoundingClientRect().top;

    if (posicion < tamañoDePantalla && posicion > -animacion.clientHeight / 2) {
        // Si el elemento está dentro de la vista (considerando un pequeño ajuste negativo para mejor manejo)
        if (!animacion.classList.contains('estilo')) {
            animacion.classList.add('estilo');
        }
    } else {
        // Si el elemento está fuera de la vista, eliminamos la clase 'estilo'
        animacion.classList.remove('estilo');
    }
});
