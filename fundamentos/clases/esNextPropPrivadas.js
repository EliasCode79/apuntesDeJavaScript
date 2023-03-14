class Rectangulo {
	// para q un propiedad sea privada, utilizamos una almodilla antes del nombre de la variable.
	#fondo;
	constructor(altura = 0, ancho = 0) {
		this.altura = altura;
		this.ancho = ancho;
		this.#fondo = 10;
	}
}

const rect = new Rectangulo(10, 10);
// rect.altura = 20;  --> aca podemos modificar el valor de altura ya q no es un propiedad privada.
// rect.#fondo = 20; --> aca no se puede modificar el fondo ya q es un prop. privada.
console.log(rect);
