/*let user = "agustin";
let password = "secreta";
let acceso = false;

for (let i = 1; i <= 3; i++) {
  let usuario = prompt("Ingresá tu nombre de usuario:");
  let clave = prompt("Ingresá tu clave:");

  if (usuario === user && clave === password) {
    alert(" Bienvenido, " + usuario + "!");
    acceso = true;
    break; // termina el for si acierta.
  } else {
    alert("Usuario o clave incorrectos. Intento " + i + " de 3");
  }
}

if (!acceso) {
  alert("Acceso bloqueado por fallos consecutivos.");
}*/
/*let password='';

while(password!=='admin'){
password=prompt('Ingrese su clave');

}
alert('Usted ingreso al sitio.');*/
let clave="";
let intentos=0;

while(clave!=="agustin"){
clave=prompt('Ingrese la clave :');
intentos++;
}
alert('Bienvenido '+ intentos+ 'luego de 3 intentos.')