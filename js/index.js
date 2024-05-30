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

// Card - Solução Diária
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.card-solucao').forEach(function(card) {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });
});