//objetivo validator-contenedor de las funciones//

const validator = {
  // metodo isValidator
  isValid: function (numerotarjeta) {

    if (numerotarjeta.length < 1) return false;


    //variable para guardar el numero invertido
    const invertidos = numerotarjeta.split("").reverse();


    //se inicia variable con suma total en cero.
    let sumaTotal = 0;


    //se usa ciclo para recorrer array ya invertido con i=0 y de uno en uno,a lo largo del array.
    for (let i = 0; i < invertidos.length; i++) {
      //solo posicion par se debe multiplicar//

      //si el residuo de i y 2 es igual a 1, multiplicar por dos el invertido.
      let multiplicador = parseInt(invertidos[i]);
      if ((i + 1) % 2 === 0) {
        multiplicador = invertidos[i] * 2;
      }

      if (multiplicador > 9) {
        const separarNumeros = multiplicador.toString().split("");
        //aplicar parseInt para pasar a numero e identificar posicion.
        const primerDigito = parseInt(separarNumeros[0]);
        const segundoDigito = parseInt(separarNumeros[1]);
        //sumar digitos separados.
        const sumarSeparados = primerDigito + segundoDigito;

        //agregar separados y sumar a la suma total.
        sumaTotal += sumarSeparados;
        //agregar multiplos a la suma total.
      }
      else {
        sumaTotal += multiplicador;
      }
    }

    //si el residuo entre sumaTotal y 10 es cero, retorna true//
    if (sumaTotal % 10 === 0) {
      return true;
      //si no, devuelve false//
    } else {
      return false;
    }
  },

  maskify: function (numerotarjeta) {

    if (numerotarjeta.length < 4) return numerotarjeta;
    //declara variables para mediante slice, devolver una copia de los elementos especificos del array original//
    const digitosTarjeta = numerotarjeta.slice("");
    //el indice negativo especifica un desplazamiento desde el final del array y extrae los ultimos 4 elementos del array
    const ultimosDigitos = digitosTarjeta.slice(-4);
    

    //declara variables del tipo de mascara//
    const simboloMascara = "#";
    /*declara variable para guardar el enmascaramiento tomando los numeros previos a los ultimos 4, se le suma la variable de los ultimos digitos que seran visibles*/
    const tarjetaenmascarada =simboloMascara.repeat(digitosTarjeta.length - 4) + ultimosDigitos;
   


    //finalizar la ejecucuión de la función, especifica un valor a ser devuelto a quien  llama la funcion//
    return tarjetaenmascarada;

  }

}
export default validator;

