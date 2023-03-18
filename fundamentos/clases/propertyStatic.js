class Persona {
	// Propiedade staticas y metodos
	static _conteo = 0;

	// metodo get estatico
	static get getConteo() {
		return Persona._conteo + ' instancias';
	}

	// metodo estatico
	static mensaje() {
		console.log(`Un msj desde un metodo static de la calse Persona`);
	}

	nombre = '';
	codigo = '';
	frase = '';
	comida = '';

	// El constructor por defecto retorna una instacia de un objeto.
	constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
		this.nombre = nombre;
		this.codigo = codigo;
		this.frase = frase;
		Persona._conteo++;
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

const spiderman = new Persona('peter', 'spiderman', 'tu amigo el hombre araña');

const ironman = new Persona('tony stark', 'ironman', 'yo soy ironman');

console.log(spiderman);
console.log(ironman);
console.log(Persona.getConteo);
Persona.mensaje();
