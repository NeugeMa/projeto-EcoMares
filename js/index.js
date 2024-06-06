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

// Criando um alert + validando fórmulario | Formulário de notificação
window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("emailForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var email = document.getElementById("email").value;
        alert("Obrigado por se inscrever! Você receberá notificações em " + email);
    });
});

// Criando um alert + validando fórmulario | Formulário de dúvidas e sugestões
window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email2').value;
        var message = document.getElementById('message').value;

        alert(`Obrigado, ${name}! Suas informações foram enviadas com sucesso:\nEmail: ${email}\nMensagem: ${message}`);
    });
});

