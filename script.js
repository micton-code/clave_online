var images = document.querySelectorAll('.ad-image');
var currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

// iniciar el bucle
setInterval(showNextImage, 3000);