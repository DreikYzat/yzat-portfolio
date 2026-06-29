const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

function ajustarCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

ajustarCanvas();

const letras = "010101YZATDEVAPIRESTNODEPOSTGRES";
const fonte = 16;
let colunas = Math.floor(canvas.width / fonte);
let gotas = [];

function iniciarGotas() {
  colunas = Math.floor(canvas.width / fonte);
  gotas = [];

  for (let i = 0; i < colunas; i++) {
    gotas[i] = Math.random() * canvas.height;
  }
}

iniciarGotas();

function desenharMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff99";
  ctx.font = fonte + "px monospace";

  for (let i = 0; i < gotas.length; i++) {
    const texto = letras[Math.floor(Math.random() * letras.length)];
    ctx.fillText(texto, i * fonte, gotas[i] * fonte);

    if (gotas[i] * fonte > canvas.height && Math.random() > 0.975) {
      gotas[i] = 0;
    }

    gotas[i]++;
  }
}

setInterval(desenharMatrix, 45);

window.addEventListener("resize", () => {
  ajustarCanvas();
  iniciarGotas();
});

const linhasTerminal = [
  "> Inicializando YZAT Studio Digital...",
  "✔ Interface carregada",
  "✔ JavaScript executado",
  "✔ API REST em produção",
  "✔ PostgreSQL online",
  "✔ Aplicação Web + APK Android",
  "✔ Projeto YZAT Almoxarifado ativo",
  "✔ Bem-vindo ao meu laboratório digital."
];

let linhaAtual = 0;
let textoFinal = "";

function escreverTerminal() {
  const terminal = document.getElementById("terminalText");

  if (!terminal) return;

  if (linhaAtual < linhasTerminal.length) {
    textoFinal += linhasTerminal[linhaAtual] + "\n";
    terminal.innerHTML = textoFinal + '<span class="cursor">█</span>';
    linhaAtual++;

    setTimeout(escreverTerminal, 650);
  }
}

window.addEventListener("load", escreverTerminal);