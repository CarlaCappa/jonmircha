// OPERADORES 
//Aritmeticos: + - * % 0 

let a = 5 + 5 ; // 10
let b = 5 +5 -10; // 0
let c = 5+5-10*3; // devuelve -20
let d =(5+5-10)*3; // aca devuelve 0 
let e = 5 +(5-10)*3; // -10
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
let g =5/2;
console.log(g); //nos devuelve 2,5: el cociente de la division
let modulo = 5 % 2; //nos devuelve 1: el residuo de la division


 // OERADORES RELACIONALES 
  /*  > , < , >= , <= , == , ===, != , !==  */

  console.log(8>9); // false la considicon NO  se esta cumpliendo
  console.log(9>8); // True la considicon se esta cumpliendo
  console.log(8>=9); //  FALSE
  console.log(9>=8) // TRUE

  /*
  = 1 igual es asignacion de variable
  == 2 iguales es comparacion de valores 
  === 3 iguales  es comparacion de tio de dato y de valor 
  */
 console.log(7==7); //TRUE
 console.log("7"==7);// TRUE un valor string y un valor numerico
console.log(0==false)/*imprime TRUE ,  xq 0 tiende a falso, y falso es igual a falso   solo compara valores - se considera mala practica*/ 

console.log(7===7); //TRUE
console.log("7"===7); // FALSE  
console.log(0===false); // FALSE  porque compara tipo de dato y valor 

// INCREMENTO DECREMENTO 

/*let  i= 1;
// i = i+2;
console.log(i); // 3 
//i+=3; 
console.log(i); // 4
//i/=3;
console.log(i);// 0,333333 */

// OPERADOR UNARIO
/* va a aumentar de a 1  */
let i=2
i++ // 3
console.log(i);
i--//2
console.log(i);
++i // 3
console.log(i);
--i //2
console.log(i);

/* IMPORTANTE 

La manera de escribir el codigo SI PUEDE influir en la manera de como java Scritp interreta las asignaciones. en  algunos metodos, asignar un oerador unario a la izq o a la derecha,   determina  si js le agrega o no valor a la variable antes de ser asignada.
JAVASCRIPT egun el flujo dle codigo ,  interreta cada valor
*/

/* OPERADORES LOGICOS  
/* */




