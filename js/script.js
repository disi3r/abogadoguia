// Script para el sitio web moderno de la Guía Digital para Abogados Noveles

document.addEventListener('DOMContentLoaded', function() {
    // Menú de navegación móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Botón de volver arriba
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Animación de elementos al hacer scroll
    const animateElements = document.querySelectorAll('.delayed-animation');
    
    if (animateElements.length > 0) {
        const animateOnScroll = function() {
            animateElements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementPosition < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        };
        
        // Inicializar animaciones
        animateOnScroll();
        
        // Actualizar animaciones al hacer scroll
        window.addEventListener('scroll', animateOnScroll);
    }

    // Destacar la sección actual en la navegación
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');
    
    if (sections.length > 0 && navItems.length > 0) {
        window.addEventListener('scroll', function() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navItems.forEach(navItem => {
                navItem.classList.remove('active');
                if (navItem.getAttribute('href').includes(current)) {
                    navItem.classList.add('active');
                }
            });
        });
    }
});

// Función para manejar la transición entre páginas
function smoothPageTransition(event) {
    const currentPage = window.location.href;
    const targetPage = event.target.href;
    
    // Si estamos navegando a una página diferente
    if (currentPage !== targetPage && event.target.tagName === 'A' && 
        event.target.href.startsWith(window.location.origin) && 
        !event.target.hasAttribute('target')) {
        
        event.preventDefault();
        
        document.body.classList.add('page-transition');
        
        setTimeout(() => {
            window.location = targetPage;
        }, 300);
    }
}

// Aplicar la transición a todos los enlaces internos
document.addEventListener('click', smoothPageTransition);