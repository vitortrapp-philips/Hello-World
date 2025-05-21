const title_txt = "Olá! Eu sou o Vitor!";
let t = 0;

function digitar_title() {
    if (t < title_txt.length) {
        document.getElementById("title").innerHTML += title_txt.charAt(t);
        t++;
        setTimeout(digitar_title, 100);
    }
}

digitar_title();

document.addEventListener("DOMContentLoaded", function () {
  // Alternância de tema
  const toggleButton = document.getElementById("toggle-theme");
  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    toggleButton.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Alternar Tema"
      : "🌙 Alternar Tema";
  });

  // Modal de boas-vindas
  const modal = document.getElementById("modal-welcome");
  const input = document.getElementById("user-name");
  const submit = document.getElementById("submit-name");
  const welcome = document.getElementById("welcome-message");

  submit.addEventListener("click", function () {
    const nome = input.value.trim();
    if (nome) {
      welcome.innerText = `Seja bem-vindo(a), ${nome.charAt(0).toUpperCase() + nome.slice(1)}! 👋`;
      modal.style.display = "none";
    }
  });

  // Validação do formulário
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("message").value.trim();

    let valido = true;

    document.getElementById("name-error").innerText = "";
    document.getElementById("email-error").innerText = "";
    document.getElementById("message-error").innerText = "";

    if (nome === "") {
      document.getElementById("name-error").innerText = "Por favor, preencha seu nome.";
      valido = false;
    }

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (email === "") {
      document.getElementById("email-error").innerText = "Por favor, preencha seu e-mail.";
      valido = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("email-error").innerText = "E-mail inválido.";
      valido = false;
    }

    if (mensagem === "") {
      document.getElementById("message-error").innerText = "Por favor, escreva uma mensagem.";
      valido = false;
    }

    if (valido) {
      alert(`Mensagem enviada com sucesso!\n\nNome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`);
      form.reset();
    }
  });
});



