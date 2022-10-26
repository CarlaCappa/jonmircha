//FUNCIONES Declarada

function estoEsUnaFuncion(){
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
};// no se imprime nada porque aun no la invoque
//Como invocar una funcion ?
estoEsUnaFuncion(); // imprimer Uno dos tres 

function UnaFuncionQueDevuelveValor (){
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
    return "La funcion ha retornado una cadena de texto"
} // Imprime :  La funcion ha retornado una cadena de texto

//estoEsUnaFuncion(); 
console.log(UnaFuncionQueDevuelveValor);// imprime como prototipo

//Puedo asignar una funcion a una variable
let valorDeFuncion = UnaFuncionQueDevuelveValor(); 
console.log(valorDeFuncion);// Imprime: La funcion ha retornado una cadena de texto
//console.log(UnaFuncionQueDevuelveValor()); // Imprime: La funcion ha retornado una cadena de texto

