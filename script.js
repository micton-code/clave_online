var images = document.querySelectorAll('.ad-image');
var currentIndex = 0;

//Funcion para mostrar la imagen actual 
function showCurrentImage() {
    for (var i = 0; i < images.length; i++) {
        if (i === currentIndex) {
            images[i].classList.add('active');
        } else {
            images[i].classList.remove('active');
        }
    }
}

//Funcion para mostrar la imagen siguiente
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showCurrentImage();
}

//Funcion para mostrar la imagen anterior
function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) %images.length;
    showCurrentImage();
}

//Iniciar el bucle 
var interval = setInterval(showNextImage, 8000);

//Obtener referencias a los botones 
var prevButton = document.getElementById('prevButton');
var nextButton = document.getElementById('nextButton');

//Agregar manejadores de eventos para los botones
prevButton.addEventListener('click', function() {
    clearInterval(interval); //Detener el bucle automático 
    showPreviousImage();
    interval = setInterval(showNextImage, 6000); //Reinicia el buble
});

nextButton.addEventListener('click', function() {
    clearInterval(interval); //Detener el bucle automático
    showNextImage();
    interval = setInterval(showNextImage, 6000); //Reinicia el buble
});

