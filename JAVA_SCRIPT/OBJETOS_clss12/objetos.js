
/* Un objeto e suna coleccion de  Proiedades y valores 
    Como se genera un objeto, que tipos de datos puede recibir , atributos  y propiedades y metodos 
    */

const b = {}
console.log(b);

const c = new Object(); // este modo ya no se usa
console.log(c);

/* Dentro de un objeto a las variables se las va a llamar porpiedades, y a las funciones se las llama metodos  */

const jon = {
    nombre:"jon", // es una proiedas
    apellido:"Mircha", // es una proiedad 
    edad:35, // es una proiedad 
    pasatiempos: ["correr", "Hacer ejercicio", " dar clases"],// es un apropiedad 
    soltero: false, // es una propiedad 
    contacto: {
        email:"jonmircha@gmail.com",
        twitter:"@jonmircha",
        movil:"521551234578"
    }, // es un objeto 
    saludar: function(){
        console.log(`Hola:)`) // esto no es una propiedad, e sun metodo o funcion
    },
    decirMiNombre:function(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad}`);/* el "this" hace referencia a este mismo objeto, llamo a la propiedad dentro del objeto utilizando el "." y el nombre de la proiedsd a la que refiero.*/
    }
}
console.log(jon)

// Como accedemos a los vlaores de este obj eto?
console.log(["nombre"]); // imprimer Jon
console.log("apellido");// immrime Mircha 
console.log(jon.nombre);// imprime jon
console.log(jon.apellido);
console.log(jon.edad);
console.log(jon.soltero);
console.log(jon.pasatiempos);// imprime ["correr", "Hacer ejercicio", " dar clases"]
console.log(jon.pasatiempos[1]); // imprime "Hacer ejercicio"
console.log(jon.contacto); //imprime:{email: 'jonmircha@gmail.com', twitter: '@jonmircha', movil: '521551234578'}
console.log(jon.contacto.twitter)// imprime solo @jommircha 
jon.saludar();//  la fuuncion incluye el conslo.log,  por eso imprime " Hola:)"
jon.decirMiNombre();//  ejecuta el consol.log de mi funcion "Hola me llamo jon Mircha y tengo 35"

/* un objeto es una coleeciones de   valores simples y compuestos  */

/* nuestroa objetos como rpototivos ( constructos ) tienen alguno metodos  internos de javaScriot  */
console.log (Object.keys(jon))/* es un metodo que me permite listar las llaves del objeto  . imprime : (8) ['nombre', 'apellido', 'edad', 'pasatiempos', 'soltero', 'contacto', 'saludar', 'decirMiNombre']*/
console.log(Object.values(jon)); // me imprime los valores : (8) ['jon', 'Mircha', 35, Array(3), false, {…}, ƒ, ƒ]
console.log(jon.hasOwnProperty("nombre")); // revisa si dentro de mi objeto esxiste la riiedad que menciono , en este caso develve --> TRUE 
