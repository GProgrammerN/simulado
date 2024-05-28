function revelarSimulado(materia) {
    switch (materia) {
        case 'engSoftware':
            document.getElementById('formEng').style.display = 'block';
            break;
        case 'bancoDados':
            document.getElementById('formBD').style.display = 'block';
            break;
        case 'poo':
            document.getElementById('formPOO').style.display = 'block';
            break;
    }

}

function verificarRespostas(materia) {
    var acertos = 0;
    var totalQuestoes = 5;
    var respostasCorretas;

    switch (materia) {
        case 'engSoftware':
            respostasCorretas = ['c', 'b', 'c', 'b', 'b'];
            var resultadoDiv = document.getElementById('resultadoEng');
            var materia = 'Eng'
            break;
        case 'bancoDados':
            respostasCorretas = ['b', 'b', 'c', 'b', 'a'];
            var resultadoDiv = document.getElementById('resultadoBD');
            var materia = 'BD'
            break;
        case 'poo':
            respostasCorretas = ['b', 'b', 'b', 'c', 'c'];
            var resultadoDiv = document.getElementById('resultadoPOO');
            var materia = 'POO'
            break;
    }

    for (var i = 1; i <= totalQuestoes; i++) {
        var radios = document.getElementsByName('q' + materia + i);
        for (var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if (radio.checked && radio.value === respostasCorretas[i - 1]) {
                acertos++;
            }
        }
    }
    resultadoDiv.innerHTML = 'Você acertou ' + acertos + ' de ' + totalQuestoes + ' questões.';

    return acertos;
}

function exibirResultadosTotais() {
    var acertosEngSoftware = verificarRespostas('engSoftware');
    var acertosBancoDados = verificarRespostas('bancoDados');
    var acertosPoo = verificarRespostas('poo');

    var totalAcertos = acertosEngSoftware + acertosBancoDados + acertosPoo;
    var totalQuestoes = 15;

    var resultadoTotal = document.getElementById('resultado');
    resultadoTotal.innerHTML = 'Você acertou ' + totalAcertos + ' de ' + totalQuestoes + ' questões no total.<br>' +
        'Engenharia de Software: ' + acertosEngSoftware + ' de 5<br>' +
        'Banco de Dados: ' + acertosBancoDados + ' de 5<br>' +
        'POO: ' + acertosPoo + ' de 5';
}