// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('bg-gray-900', 'shadow-lg');
        header.classList.remove('bg-transparent', 'py-4');
        header.classList.add('py-2');
    } else {
        header.classList.remove('bg-gray-900', 'shadow-lg', 'py-2');
        header.classList.add('bg-transparent', 'py-4');
    }
};

// Navbar Animate
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observerOptions = {
    root: null,
    threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
            link.classList.remove("bg-cyan-accent", "text-black");
            link.classList.add("text-white");

            if (link.getAttribute("href") === `#${currentId}`) {
            link.classList.add("bg-cyan-accent", "text-black");
            link.classList.remove("text-white");
            }
        });
        }
    });
    }, observerOptions);

sections.forEach((section) => observer.observe(section));

// Hamburger Menu Toggle
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    // Membuat span hamburger berbentuk X
    hamburger.classList.toggle('hamburger-active');
    // Membuka tutup menu navigasi mobile
    navMenu.classList.toggle('hidden');
});

function openWhatsApp() {
    const phoneNumber = "6285814963433"; 
    const message = "Halo Seftian, saya melihat portofolio Anda dan tertarik untuk bekerja sama!";
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
}

function downloadCV() {
    const link = document.createElement('a');
    link.href = 'CV_SEFTIAN_XI_RPL1.pdf'; // Pastikan path ini benar
    link.download = 'CV_SEFTIAN_XI_RPL1.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function prankSend() {
    alert('Belum dibuat :D');
}