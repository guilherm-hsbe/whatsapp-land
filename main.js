import 'bootstrap/dist/js/bootstrap.js';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'animate.css';
import './style.css';

AOS.init({
    offset: 300,
    duration: 700,
    once: true,
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    const anchors = document.querySelectorAll('a');
    
    images.forEach(img => img.setAttribute('draggable', 'false'));
    anchors.forEach(a => a.setAttribute('draggable', 'false'));
});