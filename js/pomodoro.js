const tempoTotalPomodoro = document.getElementById('tempoTotalPomodoro')

const menosHoras = document.getElementById('menosHoras')
const horas = document.getElementById('horas')
const maisHoras = document.getElementById('maisHoras') 

const menosMinutos = document.getElementById('menosMinutos')
const minutos = document.getElementById('minutos')
const maisMinutos = document.getElementById('maisMinutos')

const menosSegundos = document.getElementById('menosSegundos')
const segundos = document.getElementById('segundos')
const maisSegundos = document.getElementById('maisSegundos')

const cronometros = document.getElementById('cronometros')

const iniciar = document.getElementById('iniciar')
const parar = document.getElementById('parar')

const musica = new Audio('Assets/audio/GatinhaAssanhada.mp3')

let timer = null

function atualizarTempo(){ 
    tempoTotalPomodoro.textContent = `${horas.value.padStart(2, "0")}:${minutos.value.padStart(2, "0")}:${segundos.value.padStart(2, "0")}`
}

menosHoras.addEventListener('click', function() {
    let valor = parseInt(horas.value) || 0;
    if (valor > 0) {
        valor--;
    } else {
        valor = 0;
    }
    horas.value = valor.toString().padStart(2, '0');
    atualizarTempo();
});

maisHoras.addEventListener('click', function() {
    let valor = parseInt(horas.value) || 0;
    if (valor < 24) {
        valor++;
    } else {
        valor = 24;
    }
    horas.value = valor.toString().padStart(2, '0');
    atualizarTempo();
});

menosMinutos.addEventListener('click', function() {
    let valor = parseInt(minutos.value) || 0;
    if (valor > 0) {
        valor--;
    } else {
        valor = 0;
    }
    minutos.value = valor.toString().padStart(2, '0');
    atualizarTempo();
});

maisMinutos.addEventListener('click', function() {
    let valor = parseInt(minutos.value) || 0;
    if (valor < 59) {
        valor++;
    } else {
        valor = 59;
    }
    minutos.value = valor.toString().padStart(2, '0');
    atualizarTempo();
});

menosSegundos.addEventListener('click', function() {
    let valor = parseInt(segundos.value) || 0;
    if (valor > 0) {
        valor--;
    } else {
        valor = 0;
    }
    segundos.value = valor.toString().padStart(2, '0');
    atualizarTempo();
});

maisSegundos.addEventListener('click', function() {
    let valor = parseInt(segundos.value) || 0;
    if (valor < 59) {
        valor++;
    } else {
        valor = 59;
    }
    segundos.value = valor.toString().padStart(2, '0');
    atualizarTempo();
});

horas.addEventListener('input', atualizarTempo);
minutos.addEventListener('input', atualizarTempo);
segundos.addEventListener('input', atualizarTempo);

let totalSegundos = 0; // Torna global

function iniciarCronometro() {
  totalSegundos =
    parseInt(horas.value) * 3600 +
    parseInt(minutos.value) * 60 +
    parseInt(segundos.value);

  cronometros.classList.add('display-none');
  iniciar.classList.add('display-none');
  parar.classList.remove('display-none');

  timer = setInterval(() => {
    if (totalSegundos > 0) {
      totalSegundos--;
      horas.value = Math.floor(totalSegundos / 3600).toString().padStart(2, '0');
      minutos.value = Math.floor((totalSegundos % 3600) / 60).toString().padStart(2, '0');
      segundos.value = (totalSegundos % 60).toString().padStart(2, '0');
      atualizarTempo();
    } else {
      clearInterval(timer);
      musica.play();
    }
  }, 1000);
}

function pararCronometro() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  totalSegundos = 0;
  horas.value = "00";
  minutos.value = "00";
  segundos.value = "00";
  atualizarTempo();

  cronometros.classList.remove('display-none');
  iniciar.classList.remove('display-none');
  parar.classList.add('display-none');
  musica.pause();
  musica.currentTime = 0;
}

atualizarTempo()