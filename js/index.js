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

// Card de escolha - benefícios
for (let i = 1; i <= 5; i++) {
    document.getElementById('toggleButton' + i).addEventListener('click', function() {
        var content = document.getElementById('content' + i);
        if (content.style.display === 'none') {
            content.style.display = 'block';
            this.textContent = '⬇';
        } else {
            content.style.display = 'none';
            this.textContent = '☀';
        }
    });
}

// Criando um alert + validando fórmulario 
document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    alert("Obrigado por se inscrever! Você receberá notificações em " + email);
});




