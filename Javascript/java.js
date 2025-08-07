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
alert('Usted ingreso al sitio.');
let clave="";
let intentos=0;

while(clave!=="agustin"){
clave=prompt('Ingrese la clave :');
intentos++;
}
alert('Bienvenido '+ intentos+ 'luego de 3 intentos.')

/*
<<<<<<<<<<<<< BUCLES>>>>>>>>>>>>>>>>>>>>>
for ( iniciador; condicion;contador )
condicion true se imprime el codigo.
condicion false se corta el bucle y se termina el flujo.
Funcionalidad: repite un codigo una numero fijo de veces.

while(condicion): 
{                 
bloque codigo; contador;
}

Funcionalidad: el codigo se va a repetir las veces que la condicion sea true.

do while: permite que se ejecute un codigo o bloque codigo antes de chequear con while la condicion. 
funcionalidad: menu de opciones. Doy las opciones y luego uso el while para generar la condicion a validar. 



let numero=0;

do{
numero=parseInt(prompt('Ingresa un numero mayor a 10'));

} while(numero<=10);

alert('Usted ingreso un numero valido :'+ numero+' es mayor a 10');

let nombre;

do{
nombre=prompt('Ingreso su nombre');

} while(nombre==='' || nombre===null){
alert('hola '+ nombre+ " bienvenido");

}

let iniciador=10;

do{
  console.log('Cuenta Regresiva del despegue '+ iniciador);
  iniciador--;
}
while(iniciador>=0);

console.log('Su cohete despego.');

let opciones;

do{
opciones=prompt('Menu de Opciones:\n1. Productos\n2. Carrito\n3. Home');

if(opciones==="1"){
  alert('Mostrando Productos.');

}
else if(opciones==='2'){
  alert('Mostrando Carrito.')
}
else if(opciones!=='3'){
  alert('Opcion no validad')
}
}while(opciones!=='');*/
/*
let dado=0;
let lanzamientos=0;

while(dado!==1){

dado=Math.floor(Math.random()*6)+1;
lanzamientos++;
console.log('Lanzamiento'+lanzamientos+':' + dado);

}

console.log('Salio el numero 1 luego de '+ lanzamientos+'tiradas.')
/*
math floor: 0 a 1; ej: 0,45;
*6=2,7.
math random: 0.45*6: 2,7=> 2.

let dado;
let tiradas=0;

do{
dado=Math.floor(Math.random()*6)+1;
tiradas++;
console.log('Lanzamientos'+tiradas+':'+ dado);

}while(dado!==1);

console.log('Salio el numero 1 despues de:'+ tiradas);

let vieneBondi= false;

while(!vieneBondi){
console.log('Sigo esperando bajo la lluvia porque soy responble y voy a clase.');
vieneBondi=confirm('Vino el bondi?');

}

console.log('Yendo');*/

function contarTres(){
console.log('uno');
console.log('dos');
console.log('tres');


}

contarTres();

/*Funciones con parametros*/

function saludar(nombre){

console.log('hola '+ nombre + ' Bienvenido a tu perfil');

};
saludar('agustin');
function multiplicar(x,y){
console.log('Su resultado es '+ (x * y));

}

multiplicar(3,4);

function sumar(a,b){

return a + b;

}

let resultado= sumar(2,5);

alert(resultado);
/* Funciones Locales: la variable esta dentro de la funcion no esta declarada*/
function numAleatorio(){
let numero=Math.floor(Math.random()*10)+1;
return numero;
}

let aleatorio= numAleatorio();

alert('Su numero de rifa es '+ aleatorio);

/*Variable Global: declaro primero la varible por fuera de la funcion*/

let contador= 0;

function sumarContador(){
contador= contador + 1;
console.log('Su numero es '+ contador);


}

const respuestas=()=>{
  console.log('hola');
};

respuestas();