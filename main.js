var peso = "";
var altura = "";
var imc = peso/(altura*altura)*10000;


function calculaImc(){

   
    peso = prompt("Introduzca su peso en kilogramos:", "Kilogramos");
    result = peso;
    peso = parseInt(peso);


    altura = prompt("Introduzca su altura en centímetros:", "Centímetros");
    result = altura;
    altura = parseInt(altura);


    imc = (peso) / (altura*altura)*10000;


    if (imc === 18.5 || imc < 18.5){

        alert("Su índice de masa corporal es " + imc + "." + " " + "Peso Insuficiente");
    }

    if (imc > 18.5 && imc < 24.9){

        alert("Su índice de masa corporal es " + imc + "." + " " +"Peso Normal");
    }

    if (imc > 25 && imc < 26.9){

        alert("Su índice de masa corporal es " + imc + "." + " " +"Sobrepeso Grado I");
    }

    if (imc > 27 && imc < 29.9){

        alert("Su índice de masa corporal es " + imc + "." + " " +"Sobrepeso Grado II");
    }

    if (imc > 30 && imc < 34.9){

        alert("Su índice de masa corporal es " + imc + "." + " " +"Obesidad Grado I");
    }

    if (imc > 35 && imc < 39.9){

        alert("Su índice de masa corporal es " + imc + "." + " " +"Obesidad Grado II");
    }

    if (imc > 40 && imc < 49.9){

        alert("Su índice de masa corporal es " + imc + "." + " " +"Obesidad Morbida");
    }

    if (imc > 49.9){

        alert("Su índice de masa corporal es " + imc + "." + " " +"Obesidad Extrema");
    }

   

}


