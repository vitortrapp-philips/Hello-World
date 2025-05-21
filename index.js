const title_txt = "Olá! Eu sou o Vitor!";
const welcome_txt = "👋 Bem vindo! 👋";
let w = 0;
let t = 0;

function digitar_welcome() {
if (w < welcome_txt.length) {
    document.getElementById("welcome").innerHTML += welcome_txt.charAt(w);
    w++;
    setTimeout(digitar_welcome, 100);
}
}

function digitar_title() {
if (t < title_txt.length) {
    document.getElementById("title").innerHTML += title_txt.charAt(t);
    t++;
    setTimeout(digitar_title, 100);
}
}

digitar_welcome()
digitar_title();



document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-theme");

  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Alternar ícone do botão
    toggleButton.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Alternar Tema"
      : "🌙 Alternar Tema";
  });
});
