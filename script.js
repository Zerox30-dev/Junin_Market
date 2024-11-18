// Script para el carrusel de testimonios
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    const container = document.querySelector('.testimonial-indicators');
    let currentIndex = 0;
    let autoRotate;

    // Crear indicadores
    testimonials.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToTestimonial(index));
        container.appendChild(indicator);
    });

    const indicators = document.querySelectorAll('.indicator');

    function goToTestimonial(index) {
        testimonials[currentIndex].classList.remove('active');
        indicators[currentIndex].classList.remove('active');
        currentIndex = index;
        testimonials[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
    }

    function nextTestimonial() {
        const nextIndex = (currentIndex + 1) % testimonials.length;
        goToTestimonial(nextIndex);
    }

    // Iniciar rotación automática
    function startAutoRotate() {
        autoRotate = setInterval(nextTestimonial, 5000);
    }

    // Detener rotación automática
    function stopAutoRotate() {
        clearInterval(autoRotate);
    }

    // Iniciar la rotación automática
    startAutoRotate();

    // Detener la rotación automática cuando el usuario interactúa
    testimonials.forEach(testimonial => {
        testimonial.addEventListener('mouseover', stopAutoRotate);
        testimonial.addEventListener('mouseout', startAutoRotate);
    });

    // Script para el modal de App Store
    const modal = document.getElementById('comingSoonModal');
    const appStoreBtn = document.getElementById('appStoreBtn');
    const closeBtn = document.querySelector('.modal-close');

    // Mostrar modal al hacer clic en App Store
    appStoreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'flex';
    });

    // Cerrar modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Cerrar modal al hacer clic fuera de él
    window.addEventListener('click', function(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
});