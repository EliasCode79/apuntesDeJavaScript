class Persona {
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

// class extendida(o heredada) de Persona.
class Heroe extends Persona {
	clan = 'sin clan';
	constructor(nombre, codigo, frase) {
		// Para utilizar el constructor del padre usamos la palabra reservada super.
		super(nombre, codigo, frase);
		this.clan = 'los avengers';
	}

	// Este metodo es propio de la clase Heroe, no estamos reescribiendo el metodo 'quienSoy' de clase padre(Persona).
	quienSoy() {
		console.log(`soy ${this.nombre}, ${this.codigo}`);
		// Si queremos hacer uso del metodo padre 'quienSoy', los  llamamos de la sgte manera.
		super.quienSoy();
	}
}

const spiderman = new Heroe('peter', 'spiderman', 'tu amigo el hombre araña');
console.log(spiderman);
spiderman.quienSoy();
