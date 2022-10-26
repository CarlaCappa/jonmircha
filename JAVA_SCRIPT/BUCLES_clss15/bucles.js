/* clase en you tube 
https://www.youtube.com/watch?v=AapgtR0Rwk0&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=16 */


// WHILE

let contador=0;

while (contador<10){
console.log("while"contador);
contador++;
}// 0 1 2 3 4 5 6 7 8 9 

//DO WHILE

do {
    console.log(" do while",contador);
    contador++;
} while (contador<10); //while 1, while 2, while 3, etc DO while 10

/* con while  simempre compara  condicionales antes de ejecutar el ciclo,  en cambio con DO While siempre al menos se va a ejecutar una vez, y luego compara condicinal 
Whjilw y DO WHILE  son las menos usada en la actualidad 
 con while  simempre, 
* Con WHIE y DO WHILE siempre necesito declarar un cnotador de bucle antes
*/

// FOR 
/* parametros 
inicializacion  de la variable + conDicion + decremento o incremento de la variable 
siempre dentrO de lOS parentesis

y una vez adentro  se escriben entre corchetes ondulado la senencias que ejecuta el for 
 */

for (let i=0 ; i<10 ; i++) {
    console.log("for ",i);
}

let numeros =[10, 20, 30, 40, 50, 60, 10, 80, 90];
for ( let i=0; i<numeros.length;i++){
    console.log(numeros[i])
}

// FOR IN 
/* Me permite recorrer o itrar las porpiedades de un objeto,  */

const jon= { nombre:"Jon", apellido:"Mircha", edad:35}

//for ( const key in objet ) { }
for ( const propiedad  in jon ) { 
    console.log(propiedad);
}

// iterar y llamar a la propiedad y al valor dle objeto 

const jons = { nombre:"Jon", apellido:"Mircha", edad:35}

//FOR IR 
/*Para iterar la ropiedades  de un  Ojeto 
for ( const key in objet ) { } 
*/


for (const propiedad  in jons ) { 
    console.log(`key:${propiedad}, value:${jons[propiedad]}`)
}


// FOR OF
/*Me permite iterar todos los elemontos de cualquier objeto que sea iterarble  por java Script (ej. una cadena de texto )
 Utilizada mas para Arreglos  

for ( const iterador of object) {}
*/

for ( const elemento of numeros) {
    console.log(elemento);
}

let cadena = "hola mundo";
for (const caracter of cadena);
console.log (caracter);

