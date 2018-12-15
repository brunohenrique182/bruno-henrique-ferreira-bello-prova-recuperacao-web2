let jogoIniciado = false;
var baralho = [];
let jogador1 = [];
let jogador2 = [];

function gerarBaralho() {
    for (let i = 0; i < 13; i++) {
        baralho[i] = i + 1;
    }
}

function embaralhar() {
    let indexAtual = baralho.length,
        valorTemp, indexAleatorio;

    while (0 !== indexAtual) {

        indexAleatorio = Math.floor(Math.random() * indexAtual);
        indexAtual -= 1;

        valorTemp = baralho[indexAtual];
        baralho[indexAtual] = baralho[indexAleatorio];
        baralho[indexAleatorio] = valorTemp;
    }
}

function distribuiCartas() {
    for (let i = 0; i < 5; i++) {
        jogador1.push(baralho.shift());
        jogador2.push(baralho.shift());
    }
}

function jogar() {
    if (jogador1.length == 0 || jogador2.length == 0) {
        alert('o Jogo já acabou');
    } else {
        let img1 = 'assets/resources/images/cartas/' + jogador1[0] + '.png';
        let img2 = 'assets/resources/images/cartas/' + jogador2[0] + '.png';

        $('#imagem-1').attr('src', img1);
        $('#imagem-2').attr('src', img2);

        if (jogador1[0] < jogador2[0]) {
            jogador2.push(jogador1.shift());
            jogador2.push(jogador2.shift());
        } else {
            jogador1.push(jogador2.shift());
            jogador1.push(jogador1.shift());
        }
        $('#pontuacao-1').html(jogador1.length);
        $('#pontuacao-2').html(jogador2.length);
        if (jogador1.length == 0) {
            alert('Jogador 2 venceu');
        }
        if (jogador2.length == 0) {
            alert('jogador 1 venceu');
        }
    }
}

document.getElementById('botao-jogar').onclick = function () {
    jogar();
};

window.onload = function () {
    gerarBaralho();
    embaralhar();
    distribuiCartas();
}
