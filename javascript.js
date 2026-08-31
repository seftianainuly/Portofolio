// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('bg-gray-900', 'shadow-lg'); // Fallback background untuk Tailwind
        header.classList.remove('bg-transparent', 'py-4');
        header.classList.add('py-2');
    } else {
        header.classList.remove('bg-gray-900', 'shadow-lg', 'py-2');
        header.classList.add('bg-transparent', 'py-4');
    }
};

// Hamburger Menu Toggle
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    // Membuat span hamburger berbentuk X
    hamburger.classList.toggle('hamburger-active');
    // Membuka tutup menu navigasi mobile
    navMenu.classList.toggle('hidden');
});