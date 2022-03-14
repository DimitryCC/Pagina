function validarform() {
    let form = document.getElementById('formulario');
    let Genero = false;
    let Nombre = false;
    let Correo = false;
    let numTel = false;
    let Fecha = false;
    let Nick = false;
    let Preferencias= false;
    let Contraseña = false;
    let Subscripcion = false;
    validarNom(Nombre);
    validarCorreo(Correo);
    validarNumero(numTel);
    validarfecha(Fecha);
    validarNick(Nick);
    validarCheckbox(Preferencias);
    validarConstrasseña(Contraseña);
    validar_radio(Subscripcion);
    validarGenero(Genero);
function validarNom(Nombre){
    let persona = document.getElementById("id_nombrei").value;
    let comprovar = /^[A-Z][a-z]+( [A-Z][a-z]+){1,3}$/;
    let mensaje = document.getElementById("Nombre_Spam");
        if (comprovar.test(persona)) {
            mensaje.innerHTML="";
            return Nombre = true;
        } else {
            mensaje.innerHTML=" Parámetro obligatorio";
    }
}
function validarCorreo(Correo){
    let comprovar = /^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]{2,3})*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/;
    let correo = document.getElementById("id_meil").value;
    let mensaje = document.getElementById("Correo_Spam")
    if(correo==0){
        mensaje.innerHTML=" Parámetro obligatorio";
    }else{
        if(comprovar.test(correo)){
            mensaje.innerHTML="";
            return Correo = true;
        }else{
            mensaje.innerHTML=" Valor incorrecto";
            mensaje.style.color="orange"
        }
    }
}
function validarNumero(numTel){
    let comprovar = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;
    let numero = document.getElementById("id_NumeroTelefono").value;
    let mensaje = document.getElementById("Numero_Spam");
    if (numero==0) {
        mensaje.innerHTML=" Parámetro obligatorio";
    } else {
        if (comprovar.test(numero)) {
            mensaje.innerHTML="";
            return numTel = true;
        } else {
            mensaje.innerHTML=" Valor incorrecto";
        }
    }
}
function validarfecha(Fecha){
    let mensaje = document.getElementById("Fecha_Spam");
    try {
        var fechap = document.getElementById(id_nacimientoi).value;
    } catch (fechap) {
        fechap = 0
    }
    if (fechap == 0) {
        mensaje.innerHTML=" Parámetro obligatorio";
    } else {
        var fechap = document.getElementById("id_nacimientoi").value;
        var fecha = new Date(fechap);
        var anio = fecha.getFullYear();
        var fechaActual = new Date();
        var fechaActual_anio = fechaActual.getFullYear();
        var edad = fechaActual_anio - anio;
    if (edad >= 18) {
        mensaje.innerHTML="";
        return Fecha = true;
    } else {
        mensaje.innerHTML=" Eres menor de edad";
    }
    }
}
function validarGenero(Genero) {
    let genero = document.getElementById("Generos").value;
    let mensaje = document.getElementById("genero_spam");
    if (genero == "vacio") {
        mensaje.innerHTML=" Parámetro obligatorio";
    } else {
        mensaje.innerHTML="";
        return Genero = true;
    }
}
function validarNick(Nick){
    var comprovar = /[a-zA-Z0-9]+$/;
    let nick = document.getElementById("id_Nick").value;
    let mensaje = document.getElementById("Nick_Spam");
    if (nick.length == 0) {
        mensaje.innerHTML=" Parámetro obligatorio";
    } else {
    if (comprovar.test(nick)) {
        mensaje.innerHTML="";
        return Nick = true;
    } else {
        mensaje.innerHTML=" El apodo no es válido";
    }
    }
}
function validarConstrasseña(Contraseña){
    let contraseña = document.getElementById("id_contraseña").value;
    let contraseña2 = document.getElementById("id_contraseña2").value;
    let mensaje1 = document.getElementById("Spam_Contraseña1");
    let mensaje2 = document.getElementById("Spam_Contraseña2");
    if (contraseña==0) {
        mensaje1.innerHTML=" Parámetro obligatorio";
    }else{
        if (contraseña2==0) {
            mensaje1.innerHTML="";
            mensaje2.innerHTML="  Parámetro obligatorio";
        }else{
            if (contraseña==contraseña2) {
                mensaje1.innerHTML="";
                mensaje2.innerHTML="";
                return Contraseña = true;
            } else {
                mensaje1.innerHTML=" Las contraseñas no coinciden";
                mensaje2.innerHTML=" Las contraseñas no coinciden";
            }
        }
    }
}
function validarCheckbox(checkbox){
	const illes = document.querySelectorAll("input[name='check']");
	const error_illes = document.getElementById("Spam_Checkbox");
	let contador = 0;

	for (let i = 0; i < illes.length; i++) {if (illes[i].checked) contador++;}
	if (contador >= 2)
	{
		error_illes.innerHTML = "";
		return true;
	}else{
	error_illes.innerHTML = "Al menos dos";
    }
}
function validar_radio (Subscripcion)
{
	let subscripcion = document.querySelectorAll("input[name='subscripcion']");
    let mensaje = document.getElementById("suscription_spam")
	for (let i = 0; i < subscripcion.length; i++){
		if (subscripcion[i].checked)
		{
			mensaje.innerHTML = "";
			return true;
		}else{
        mensaje.innerHTML = "Escoja una";
        }
        }
	return false;
}
return Nombre&&Correo&&Contraseña&&numTel&&Fecha&&Nick&&Preferencias&&checkbox&&Subscripcion;
}