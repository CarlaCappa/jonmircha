// ARRAY 

const a = [];  // arreglo vacio
console.log(a); 
/*Array(0)
length:0 */
const b = [1,true,"Hola",["A","B","C",[1,2,3]]] // arreglos declarados 
console.log(b);// me imprime el conjutos de elemntos que tiene el arreglo
/*(4) [1, true, 'Hola', Array(3)]
0: 1
1:true
2:"Hola"
3:(3) ['A', 'B', 'C']
length:4 */
console.log(b.length); // me devuelve la longitud del contenido 
/*  4  */
/* El 1er elemento se unica en la posicion 0,  si el arreglo tiene 7 elementos, va a tener 6 possiciones. Siempre le restamos 1 (-1) nal numero total de elementos   */
console.log(b[2]) // si quiero imprimir solo el elelemento "hola" debo indicar 1ero el arreglo b y dentro , entre []  la psosicion  2.
/* Hola */
console.log(b[0]) // imprime 1
console.log(b[3]) // imprime el elemento 3 d emi array principal,  que es a su vez un array con  3 elementos, 
/* (3) ['A', 'B', 'C'] */
console.log(b[3][2])// si quiero imprimir la "C" ,que esta dentro de un  array, en la posicion 2, dentro de mi array principal que esta en la posicion 3)  hay que definir 2 coordenadas,  la del 1er arreglo y la dle 2do arreglo.
/* C */
console.log(b[3][3][0])// imprime el 1
const c = Array.of("X","Y","Z",9,8,7); // podemos declarar un array  usando un consctructor Array con su metodo .of 
console.log(c) // imprime (6) ['X', 'Y', 'Z', 9, 8, 7]

const d = Array(100).fill(false);// declaro un array de 100 elementos,  a partir de un constructor  que utilisa el metodo fill para darle valor a  todos los elementos del array. 
console.log(d) /*  imprime : (100) [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]*/

const e = new Array(); // practica antigua de declarar arrays
console.log(e)// imprime el constructor vacio []
const f= new Array(1,2,3, true, false);
console.log(f) //imprime : (5) [1, 2, 3, true, false]

const colores = ["Rojo", "Verde","Azul"];
console.log(colores);
colores.push("Negro"); // agrega un elemento a mi array
console.log(colores)
colores.pop();// quita el ultimo elemento del array
console.log(colores);
 /* el es el parametro  del elemento que esta iterando, osea que el elmeneto que esta recorriendo la posicion del  metodo forEach del  arreglo */
colores.forEach(function(el) { //METODO FUNCIONAL DE LOS ARREGLOS, ANONIMA    el o element es el paramero de la funciton
    console.log(`<li>${el}</li>`);
}) // qiero que cada color vaya en un list item
/*
<li>Rojo</li>
<li>Verde</li> 
<li>Azul</li> */

/* metodo "foreach"  con referencia ID unica, debemos ingresar un 2do parametro que indique :
 y  el segundo parametro   que suele ponerce como  "i"  o "index" , indica que valor ocupa el elemento dentro de las posiciones del arreglo padre*/ 

colores.forEach(function(el,index){
    console.log(`<li id="${index}">${el}</li>`); // concateno la variable Index 
}) /* imprime 
<li id="0">Rojo</li>
<li id="1">Verde</li>
<li id="2">Azul</li> */
