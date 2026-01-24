const dataFinal = new Date("2026-07-11 15:00:00").getTime();

const intervalo = setInterval(() => {
const agora = new Date().getTime();
const diferenca = dataFinal - agora;

if (diferenca <= 0) {
    clearInterval(intervalo);
    document.getElementById("countdown").innerHTML = "Tempo esgotado!";
    return;
}

const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML =
    `FALTAM ${dias} DIAS E 
    ${horas} HORAS!`;
}, 1000);
