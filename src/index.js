import validator from './validator.js';

//guardar numero de tarjeta en cuadro de texto//

const numeroDeTarjeta = document.getElementById("numerotarjeta");


// guardando nombre usuario en cuadro de texto//

const nombreusuario = document.getElementById("nombreusuario")



const btnEnviar = document.getElementById("enviarDatos")
btnEnviar.addEventListener("click", function (evento) {
  evento.preventDefault(); //evito recarga de sitio por etiqueta form
   

  //solo si es válida, se declara variable que llama el valor devuelto por la funcion maskify//
  //guardado numero oculto
  const tarjetaoculta = validator.maskify(numeroDeTarjeta.value);
    


  //condicional si resultado de validacion es true, envia alerta de tarjeta valida//

  if (validator.isValid(numeroDeTarjeta.value) === true) {
    alert(nombreusuario.value + ", tu número de tarjeta es válido");
        

    //poner valor de la tarjeta oculta en el input
    //document.getElementById ("numeroDeTarjeta").value = tarjetaoculta;
    

  //si el resultado de la validacion no es true, emitir alerta invalida.
  } else {
    numeroDeTarjeta.value = tarjetaoculta;
    alert(nombreusuario.value + " tu número de tarjeta " + tarjetaoculta + " es invalido ");

  }

})























