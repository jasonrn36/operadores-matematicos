/*################################################################################# */
const btn  = document.querySelector('#somar');


btn.addEventListener('click', function() {

    
    var num1 = parseInt(document.querySelector("#num-1").value);
    var num2 = parseInt(document.querySelector("#num-2").value);
    let campoA = document.getElementById('#campoA');
    let campoB = document.getElementById('#campoB');
    const mensagemErro = `\nEste bloco soma dois campos: \ncampo A + campo B, \nTente novamente`;

    var resultado = num1+num2;

    if (resultado){
        alert(`\nA soma do ${"campo A"} + o ${"campo B"} é igual a: ${resultado}`);
    }else{
        alert(mensagemErro);

    }

});

/*############################################################################*/
/* Área dO BLOCO SUBTRAÇÃO */
const btnSubtrair  = document.querySelector('#btn-subitrair');


btnSubtrair.addEventListener('click', function() {

    
    var num3 = parseInt(document.querySelector("#num-3").value);
    var num4 = parseInt(document.querySelector("#num-4").value);
    let label1 = document.getElementById('#label-1'.value);
    let label2= document.getElementById('#label-2'.value);
    const mensagemErro = `\nEste bloco soma dois campos: \ncampo A + campo B, \nTente novamente`;

    var subtrair = num3-num4;

    if (!isNaN(subtrair)) {
        alert(`\nO valor da Subtração é: ${subtrair}`);
    }else{
        alert(mensagemErro);

    }

});

/*############################################################################*/
/* Área Divisão */
const btnDividir  = document.querySelector('#btn-dividir');


btnDividir.addEventListener('click', function() {

    
    var number1 = parseInt(document.querySelector("#number-1").value);
    var number2 = parseInt(document.querySelector("#number-2").value);
    let Label3 = document.getElementById('#Label-3'.value);
    let Label4 = document.getElementById('#Label-4'.value);
    const mensagemErro = `\nEste bloco soma dois campos: \ncampo A + campo B, \nTente novamente`;

    var dividir = number1 / number2;

    if (!isNaN(dividir)) {
        alert(`\nO valor da divisão é: ${dividir}`);
    }else{
        alert(mensagemErro);

    }

});

/*############################################################################*/
/* Área Multiplicação */

/// Área de declaraçã das constantes
const btnMultiplicar  = document.querySelector('#btn-multiplicar');

btnMultiplicar.addEventListener('click', function() {


    var number3 = parseInt(document.querySelector("#number-3").value);
    var number4 = parseInt(document.querySelector("#number-4").value);
    let Label5 = document.getElementById('#Label-5'.value);
    let Label6 = document.getElementById('#Label-6'.value);
    const mensagemErro = `\nEste bloco multiplica dois campos: \ncampo A + campo B, \nTente novamente`;

    var multiplicar = number3 * number4;

    if (!isNaN(multiplicar)) {
        alert(`\nO valor da multiplicação é: ${multiplicar}`);
    }else{
        alert(mensagemErro);

    }

});