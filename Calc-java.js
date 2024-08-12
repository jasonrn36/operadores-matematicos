/*################################################################################# */
const btn  = document.querySelector('#somar');
const num1 = document.getElementById('num-1');
const num2 = document.getElementById('num-2');


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
const num3 = document.getElementById('num-3');
const num4 = document.getElementById('num-4');


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
