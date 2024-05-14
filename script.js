function verificarRespostas(materia) {
    var acertos = 0;
    var totalQuestoes = 5;
    var respostasCorretas;

    switch (materia) {
        case 'engSoftware':
            respostasCorretas = ['c', 'b', 'c', 'b', 'b'];
            break;
        case 'bancoDados':
            respostasCorretas = ['b', 'b', 'c', 'b', 'a'];
            break;
        case 'poo':
            respostasCorretas = ['b', 'b', 'b', 'c', 'c'];
            break;
    }

    for (var i = 1; i <= totalQuestoes; i++) {
        var radios = document.getElementsByName('q' + i);
        for (var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if (radio.checked && radio.value === respostasCorretas[i - 1]) {
                acertos++;
            }
        }
    }

    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = 'Você acertou ' + acertos + ' de ' + totalQuestoes + ' questões.';
}