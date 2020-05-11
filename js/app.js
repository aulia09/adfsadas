const navSlide = () => {

    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li ');
    // Toggle Button
    menu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        // Animasi menu slider
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwads ${index / 7 + 1.5}s`;
            }
        });
    });

}

navSlide();