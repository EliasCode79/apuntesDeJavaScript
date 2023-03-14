// Un singleton es un instacia unica de mi clase, q por mas q hagamos "new" nuevamente, siempre retornemos la misma instancia.

class Singleton {
	static instancia; // por defecto instancia tiene el valor de 'undefined'.
	nombre = '';

	constructor(nombre = '') {
		// const a = undefined;
		// console.log(a);  // a es undefined
		// console.log(!a); // la negacion de undefined es true
		// console.log(!!a);	// la doble negacion de a es false.
		// Hacer lo de arriba es mejor para JS ya q asi trabaja con valores booleanos q con valores 'undefined', eso mismo aplicamos abajo.

		if (!!Singleton.instancia) {
			return Singleton.instancia;
		}

		Singleton.instancia = this;
		this.nombre = nombre;
		// por defecto el constructor devuelve un instancia.
	}
}

const singleton = new Singleton('Superman');
const singleton2 = new Singleton('batman');
console.log(`El nombre del primer singleton es: ${singleton.nombre}`);

console.log(`El nombre del segundo singleton2 es: ${singleton2.nombre}`);

// Todas las instacias creadas de singleton apunta a la misma instacia creada por primera vez.
