function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    

    let sorteados = [];
    let numeroAleatorio;

    for (let i = 0; i < quantidade; i++){
        numeroAleatorio = obterNumeroAleatorio(de, ate);

        while(sorteados.includes(numeroAleatorio)){
            numeroAleatorio = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numeroAleatorio);
        
    }
    let resultados = document.getElementById('resultado');
    resultados.innerHTML =  `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max){
    return parseInt(Math.random() * (max - min + 1)) + min; // sortea um número entre max e o min
} 

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}


function reiniciar() {
    alterarStatusBotao();
    document.getElementById('quantidade').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('de').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
}