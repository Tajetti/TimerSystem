# TimerSystem

TimerSystem é uma aplicação web simples para controle de tempo, incluindo relógio em tempo real e cronômetro Pomodoro personalizável.

## Funcionalidades

- **Relógio:** Exibe o horário atual em tempo real.
- **Pomodoro:** Permite configurar horas, minutos e segundos para sessões de foco.
- **Controles:** Botões para iniciar, parar e ajustar o tempo do Pomodoro.
- **Alarme:** Toca um áudio ao finalizar o cronômetro.

## Estrutura do Projeto

```
TimerSystem/
├── Assets/
│   └── audio/
│       └── GatinhaAssanhada.mp3
├── js/
│   ├── relogio.js
│   └── pomodoro.js
├── style/
│   └── global.css
├── index.html
├── pomodoro.html
└── README.md
```

## Como Usar

1. **Abra o projeto em seu navegador.**
2. **Na tela Pomodoro, ajuste o tempo desejado usando os botões ou digitando.**
3. **Clique em "Iniciar" para começar o cronômetro.**
4. **Use "Parar" para interromper a contagem.**
5. **Ao finalizar, um áudio será tocado.**

## Tecnologias

- HTML5
- CSS3 (Tailwind + custom)
- JavaScript

## Personalização

- Para alterar o áudio do alarme, substitua o arquivo em `Assets/audio/GatinhaAssanhada.mp3`.
- Para mudar cores, edite as variáveis em `style/global.css`.

## Contribuição

Sinta-se livre para abrir issues ou enviar pull requests!

## Licença

Este projeto é livre para uso pessoal e educacional.