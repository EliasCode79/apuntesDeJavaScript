class Persona {
	// Todas las clases en JS tienen por default el 'use strict'.

	// Inicializando propiedades de clases, estas tienen q ir separadas por ; ,si solo declaramos las variables sin asignarles valor estas serian undefined.
	nombre = '';
	codigo = '';
	frase = '';
	comida = '';

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

	set setComida(comida) {
		this.comida = comida.toUpperCase();
	}

	get getComida() {
		return `la comida favorita de spiderman es el ${this.comida}`;
	}
}

const sinNombre = new Persona();
const spiderman = new Persona('peter', 'spiderman', 'tu amigo el hombre araña');

//  Los set y get no se llaman entre parentesis, se llamas como a sus propiedades y le pasa por asignacion el valor(para el caso del set).
spiderman.setComida = 'pastel de la tia mey';
console.log(spiderman);

// Invocando el metodo get
console.log(spiderman.getComida);
// spiderman.miFrase();

// NOTA.- En JS se puede crear propiedades fuera de la clase, este es na de las cosas q JS permite, lo cual no conviene a la hora de programar.
/*

	spiderman.antogonista = 'duende verde';  // Js permite esto.
	
*/
