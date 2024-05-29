// Botão saiba mais 
document.querySelector('.btn-saiba').addEventListener('click', function() {
    var maisInfo = document.getElementById('maisInfo');
    maisInfo.classList.toggle('mostrar');
});

// Importando Biblioteca AOS para animações de scroll
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1000,
    });
});

// Carosseul 
