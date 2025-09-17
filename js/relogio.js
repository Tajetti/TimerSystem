function atualizarHoras() {
    const horarioAtual = document.getElementById('horarioAtual')
    const agora = new Date()
    const hora = agora.getHours().toString().padStart(2,'0')
    const minuto = agora.getMinutes().toString().padStart(2,'0')
    const segundo = agora.getSeconds().toString().padStart(2,'0')
    const tempoString = `${hora}:${minuto}:${segundo}`
    horarioAtual.textContent = tempoString
}

setInterval(atualizarHoras, 1000)
atualizarHoras()

function dataAtual(){
    const meses = ["janeiro", "fevereiro", "março", "abril", "Maio", "junho", "Julho","agosto", "setembro", "outubro",  "novembro", "dezembro"];

    const DiasDaSemana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"]
    const dataAtual = document.getElementById('dataAtual')
        
    const hoje = new Date()
    const dia = hoje.getDate()
    const diaSemana = DiasDaSemana[hoje.getDay()]
    const mes = meses[hoje.getMonth()]
    const ano = hoje.getFullYear()
    dataAtual.textContent = `${diaSemana}, ${dia} de ${mes} de ${ano}`
}

dataAtual()

