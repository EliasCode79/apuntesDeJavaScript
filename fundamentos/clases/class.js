class Persona {
	// Todas las clases en JS tienen por default el 'use strict'.

	// Inicializando propiedades de clases, estas tienen q ir separadas por ; ,si solo declaramos las variables sin asignarles valor estas serian undefined.
	nombre = '';
	codigo = '';
	frase = '';

	// El constructor por defecto retorna una instacia de un objeto.
	constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
		this.nombre = nombre;
		this.codigo = codigo;
		this.frase = frase;
	}

	quienSoy() {
		console.log(`Soy ${this.nombre} y mi identidad es: ${this.codigo}`);
	}

	miFrase() {
		this.quienSoy(); // usando un metodo de la clase.
		console.log(`${this.codigo} dice: ${this.frase}`);
	}
}

const sinNombre = new Persona();
console.log(sinNombre);
const spierman = new Persona('peter', 'spiderman', 'tu amigo el hombre araña');
console.log(spierman);
const ironman = new Persona('tony', 'ironman', 'Yo soy ironman');
console.log(ironman);

ironman.quienSoy(); // un metodo de un objeto se ejecuta cuando tiene los parentesis '()', si no tiene los tiene solo esta haciendo referencia(no se esta ejecutando)
console.log(ironman.quienSoy); // mostramos la referencia del metodo del objeto.

ironman.miFrase();
