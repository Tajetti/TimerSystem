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
    if (valor < 99) {
        valor++;
    } else {
        valor = 99;
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

atualizarTempo()