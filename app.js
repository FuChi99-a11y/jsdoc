/** 
 * Calcula la suma de dos números.
 * @param {number} a - El primer número
 * @param {number} b - El segundo número
 * @returns {number} La suma de 'a' y 'b'
*/
function suma(a,b){
    return a+b;
}

/**
 * Clase que representa un rectángulo
 */
class Rectangulo {
    /** 
         * Crea un nuevo rectángulo.
         * @param {number} ancho - El ancho del rectángulo
         * @param {number} alto -  El alto del rectángulo
    */
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
      /**
     * Calcula el área del rectángulo.
     * @returns {number} El área del rectángulo.
     */
    area() {
        return this.ancho * this.alto;
    }
}
module.exports = { suma, Rectangulo };