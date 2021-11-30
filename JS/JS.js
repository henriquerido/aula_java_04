function clicar(){

let numero1 = parseInt(document.getElementById('numero1').value);
let numero2 = parseInt(document.getElementById('numero2').value);
let resposta = document.getElementById('resposta');

    if (numero1 > numero2){
        resposta.innerHTML = ('O número maior é: ' + numero1);
    } else if(numero1 < numero2){
        resposta.innerHTML = ('O número maior é: ' + numero2);
    } else {
        resposta.innerHTML = ('Os números são iguais');
    }
}

function resultado(){
    console.log('já chegou o disco voador')
    let number = parseInt(document.getElementById('number').value);
    let resultado = document.getElementById('result');

    if (number > 0){
        resultado.innerHTML = ('Seu número é positivo');
        console.log('já chegou o disco voador1');
    } else if (number < 0){
        resultado.innerHTML = ('Seu número é negativo');
        console.log('já chegou o disco voador2');
    } else {
        resultado.innerHTML = ('0 não é nem positivo nem negativo');
        console.log('já chegou o disco voador3');
    }
}

function exibir(){
    let nome = document.getElementById('nome').value;
    let genero = parseInt(document.getElementById('genero').value)
    let comentario = document.getElementById('comentario')

    if (genero == 0){
        comentario.innerHTML = nome + ' é bidida'
    } else if (genero == 1 ){
        comentario.innerHTML =nome + ' é bidido'
    }
}

function mostrar(){
    let aluno1 = document.getElementById('name1').value;
    let nota1 = parseInt(document.getElementById('nota1').value);
    let expor1 = document.getElementById('expor1');
    let aluno2 = document.getElementById('name2').value;
    let nota2 = parseInt(document.getElementById('nota2').value);
    let expor2 = document.getElementById('expor2');
    let aluno3 = document.getElementById('name3').value;
    let nota3 = parseInt(document.getElementById('nota3').value);
    let expor3 = document.getElementById('expor3');

    if (nota1 == 10){
        expor1.innerHTML = ( aluno1 + ' é um fera!!!');
    } else if ( nota1 >= 7){
        expor1.innerHTML = ( aluno1 + ' não fez mais que sua obrigação');
    } else if( nota1 < 7){
        expor1.innerHTML = ( aluno1 + ' perdeu o ano e vai tomar uma pisa quando chegar em casa')
    }
    if (nota2 == 10){
        expor2.innerHTML = ( aluno2 + ' é um fera!!!');
    } else if ( nota2 >= 7){
        expor2.innerHTML = ( aluno2 + ' não fez mais que sua obrigação');
    } else if( nota2 < 7){
        expor2.innerHTML = ( aluno2 + ' perdeu o ano e vai tomar uma pisa quando chegar em casa')
    }
    if (nota3 == 10){
        expor3.innerHTML = ( aluno3 + ' é um fera!!!');
    } else if ( nota3 >= 7){
        expor3.innerHTML = ( aluno3 + ' não fez mais que sua obrigação');
    } else if( nota3 < 7){
        expor3.innerHTML = ( aluno3 + ' perdeu o ano e vai tomar uma pisa quando chegar em casa')
    }
}