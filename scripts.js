// Array de imágenes para la sección de hero
const images = [
    "./imagenes/software.jpg",
    "./imagenes/istockphoto-1350722246-612x612.jpg",
    "./imagenes/O-que-e-software.png",
    "./imagenes/software.png",
    "./imagenes/pngtree-business-background-of-computer-light-effect-simple-gradient-technology-theme-picture-image_1591410.jpg",
];

const heroContainer = document.getElementById('hero-container');
const mainContent = document.getElementById('main-content');
let currentIndex = 0;

function createHeroImage(src) {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('hero-image');
    heroContainer.appendChild(img);
    return img;
}

function showNextHeroImage() {
    if (currentIndex >= images.length) {
        showMainContent();
        return;
    }

    const currentImage = createHeroImage(images[currentIndex]);
    setTimeout(() => {
        currentImage.style.opacity = '1';
    }, 50);

    currentIndex++;

    setTimeout(() => {
        currentImage.style.opacity = '0';
        setTimeout(() => {
            heroContainer.removeChild(currentImage);
            showNextHeroImage();
        }, 300);
    }, 700);
}

function showMainContent() {
    heroContainer.style.display = 'none';
    mainContent.style.display = 'block';
    setTimeout(() => {
        mainContent.style.opacity = '1';
    }, 50);
}

function showSection(sectionId) {
    // Resetear todas las animaciones antes de mostrar una sección
    resetSectionAnimations();

     // Ocultar todas las secciones
    document.querySelectorAll('.section-content').forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar u ocultar la sección de inicio
    const inicioSection = document.getElementById('inicio');
    if (sectionId === 'inicio') {
        inicioSection.style.display = 'flex';
    } else {
        inicioSection.style.display = 'none';
        
         // Mostrar la sección seleccionada
        const selectedSection = document.getElementById(sectionId);
        
        // Forzar un reflow para reiniciar animaciones
        void selectedSection.offsetWidth;
        
        selectedSection.classList.add('active');
        
         // Animaciones específicas para cada sección
        animateSectionContent(sectionId, selectedSection);
    }
}

function resetSectionAnimations() {
   // Restablecer las tarjetas de servicios
    document.querySelectorAll('.service-card').forEach(card => {
        card.classList.remove('show');
    });

    // Restablecer el contenido de "Sobre Nosotros"
    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
        aboutContent.classList.remove('active');
    }

    // Restablecer los logotipos de clientes
    document.querySelectorAll('.client-logo').forEach(logo => {
        logo.classList.remove('show');
    });

   // Restablecer el contenido de contacto
    const scheduleContent = document.querySelector('.schedule-content');
    if (scheduleContent) {
        scheduleContent.classList.remove('active');
    }
}

function animateSectionContent(sectionId, selectedSection) {
    if (sectionId === 'servicios') {
        // Animar las tarjetas de servicios con un pequeño retraso
        const cards = selectedSection.querySelectorAll('.service-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('show');
            }, index * 200);
        });
    }
    else if (sectionId === 'sobre-nosotros') {
        // Animar el contenido de "Sobre Nosotros"
        const aboutContent = selectedSection.querySelector('.about-content');
        setTimeout(() => {
            aboutContent.classList.add('active');
        }, 100);
    }
    else if (sectionId === 'clientes') {
        // Animar los logotipos de clientes de forma escalonada
        const logos = selectedSection.querySelectorAll('.client-logo');
        logos.forEach((logo, index) => {
            setTimeout(() => {
                logo.classList.add('show');
            }, index * 150);
        });
    }
    else if (sectionId === 'contacto') {
         // Animar el contenido de horarios en la sección de contacto
        const scheduleContent = selectedSection.querySelector('.schedule-content');
        setTimeout(() => {
            scheduleContent.classList.add('active');
        }, 100);
    }
}

// Ejecutar la función de cambio de imagen del hero al cargar la página
window.addEventListener('load', () => {
    showNextHeroImage();
});

// Código para el menú móvil
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Cerrar el menú al seleccionar una opción
document.querySelectorAll('#mobile-menu button').forEach(button => {
    button.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});