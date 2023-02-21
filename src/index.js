import validator from './validator.js';

// guardando nombre usuario en cuadro de texto//

let camponombre = document.getElementById("nombreusuario");

function nombreusuario() {  
    console.log(camponombre.value);
  }

 nombreusuario()
camponombre.addEventListener("change", nombreusuario);



//guardar numero de tarjeta en cuadro de texto//

let numeroDeTarjeta = document.getElementById("numerotarjeta");

function numerotarjeta()  { 
   console.log(numeroDeTarjeta.value);
}
  
numerotarjeta()
numeroDeTarjeta.addEventListener("change", numerotarjeta);
 



//delimitar a 16 numeros en caja //

const input = document.getElementById("numerotarjeta");
input.addEventListener("input", function () {
    if (this.value.length > 16)
        this.value = this.value.slice(0,16);
})

//llamar boton,crear variable boton y aplicar selector de DOM al boton
const boton = document.getElementById("enviarDatos");
//aplicar selector DOM para hacer click y rescatar el valor del input en la variable numerotarjeta.
boton.addEventListener("click", () => {
    const numerotarjeta = document.getElementById("numerotarjeta").value;
    const nombreusuario = document.getElementById("nombreusuario").value;
}
)










//validator.isValid (numerotarjeta();

//condicional si resultado de validacion es true, envia alerta de tarjeta valida//
if (validator.isValid(numerotarjeta) === true) {
    alert(nombreusuario + "," + "tu número de tarjeta es válido");

    //solo si es válida, se declara variable que llama el valor devuelto por la funcion maskify//
    let tarjetaoculta = validator.maskify(numerotarjeta);
    //poner valor de la tarjeta oculta en el input
    document.getElementById("numerotarjeta").value = tarjetaoculta;
    //si el resultado de la validacion no es true, emitir alerta invalida.
} else {
    alert(nombreusuario + "," + " " + "tu número de tarjeta es válido");
    }








    













