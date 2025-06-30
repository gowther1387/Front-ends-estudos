// Efeito de scroll suave para os links do menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Controle do cabeçalho ao rolar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
    
    // Ajuste fino do padding para seções
    document.querySelectorAll('section').forEach(section => {
        section.style.scrollMarginTop = '70px'; // Compensação para links âncora
    });
});

// Animação ao rolar a página (opcional)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Inicializar animações (opcional)
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});

// Adicione isso ao seu script.js
document.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth; // Posição X do mouse (0 a 1)
    const y = e.clientY / window.innerHeight; // Posição Y do mouse (0 a 1)

    // Muda a opacidade do fundo com base no mouse
    document.body.style.backgroundColor = `rgba(0, 0, 0, ${x * 0.1})`;

    // Movimento sutil do blur (opcional)
    const blurValue = 5 + (y * 5); // Ajuste os valores conforme desejar
    document.querySelector(".home-section").style.backdropFilter = `blur(${blurValue}px)`;
});