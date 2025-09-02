/*const titulo=document.getElementById('title');/* document entra al DOM y getElementbyId busca el id por su nombre entre comillas
innerText: sirve para cambiar o agregar texto desde javascript.
style= cambia estilos del html.*/


console.log(titulo.innerText);
titulo.innerText='Cambie el titulo de entrada al Dom.';
titulo.style.color='red';
titulo.style.backgroundColor='black';

/* getElementByClassName: busca las clases de mi html*/

const parrafo=document.getElementsByClassName('parrafo');

/*length: cuenta elementos.*/

console.log(parrafo.length);

for(i=0;i<parrafo.length;i++){

  parrafo[i].style.backgroundColor='yellow';
}

/*getElementByTagName: llamamos desde del Dom a etiquetas.*/

const parrafos=document.getElementsByTagName('p');

console.log(parrafos.length);

for(let i=0;i<parrafos.length;i++){
parrafos[i].innerText=parrafos[i].innerText.toUpperCase();

}

/*querySelector= entra al DOM busca la etiqueta y selecciona la primera que coincide*/

let primerParrafo=document.querySelector('p');

console.log(primerParrafo.innerText);

primerParrafo.style.fontWeight='bold';

let agregarParrafo=document.getElementById('mensaje');

primerParrafo.innerText='COMPRAR';

/*querySelectorAll: selecciona todas las coincidencias del Dom etiqueta id class*/

let recorrerLista=document.querySelectorAll('#lista li');

console.log(recorrerLista.length);

/*innerHtml: lee cambia o añade etiquetas de html.*/

console.log(titulo.innerHTML);

titulo.innerHTML='Texto <i>cursiva</i> y <b>negrita</b>';

/*value: es para obtener los valores que pone el usario en los inputs*/

let name=document.getElementById('name');
let lastName=document.getElementById('last-name');
let send=document.getElementById('send');
let message=document.getElementById('message');

send.addEventListener('click',function(){
message.innerText='Hola '+ name.value + " "+ lastName.value;

});

/*ClassList crea modifica saca y pone una clase o class
Propiedades: .add agrega un class. remove saca un class. contains */


let headline=document.getElementById('titulo');
let btnCambiar=document.getElementById('btn-cambiar');

btnCambiar.addEventListener('click',()=>{
headline.classList.toggle('titulo');


}

);




/* let user='agustin';
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

console.log('Yendo');

function contarTres(){
console.log('uno');
console.log('dos');
console.log('tres');


}

contarTres();

/*Funciones con parametros

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
/* Funciones Locales: la variable esta dentro de la funcion no esta declarada
function numAleatorio(){
let numero=Math.floor(Math.random()*10)+1;
return numero;
}

let aleatorio= numAleatorio();

alert('Su numero de rifa es '+ aleatorio);

Variable Global: declaro primero la varible por fuera de la funcion

let contador= 0;

function sumarContador(){
contador= contador + 1;
console.log('Su numero es '+ contador);


}
/*Funciones Arrow: No hace falta escribir function/ Puede usar parametros, y si tiene un solo parametro podes omitir los parentesis/Funciones que no tienen nombre son llamadas Funciones anonimas/ En general se guardan en variables(let o const)
  
let saludo = nombre=> 'Hola '+ nombre;

console.log(saludo('agustin'));
function saludar(nombre){
  return 'hola '+ nombre;
}
function restar(a,b){
return a - b;

};

console.log(restar(4,3));

const resta= (a,b)=> a - b;

console.log(resta(4,3));

function porDos(numero){
return numero * 2;

}
 console.log(porDos(10));

const multiplico= n=> n*2;
console.log(multiplico(10));

function promedio(a,b,c){
  return (a+b-c )/2;
}

console.log(promedio(10,4,8));

const promiedos=(a,b,c)=> (a+b-c)/2;

console.log(promiedos(10,4,8));

function esPar(number){
  return number%2===0 ? 'Par': 'Impar';
}
console.log(esPar(7));
console.log(esPar(8));

let esImpar= nu=> nu%2===0 ? 'Par':'Impar';

console.log(esImpar(7));
console.log(esImpar(10));

Array: es una estructura que almacena valores en una sola variable.
Es un listado ordenado. Cada elemento tiene su posicion  o como se dice en programacion un indice.
Posicion de inicio=0!!!!!!!!!!!!!!!!!!!!!!!!!!.
Sintaxis: let nombre= [0,1,2,3,4.......        ];

let frutas=['manzana','pera','frutilla'];

console.log(frutas[1]);
console.log(frutas[0]);
Recorriendo el array con for

for(let i=0;i<frutas.length;i++){
console.log('La fruta esta en la posicion '+ i +':'+ frutas[i]);

}

Metodos son propiedades que tiene el array y nos permite mejorar su estructura al utilizarlo
Push() agrega un elemento nuevo al array al final.
Pop() elimina el ultimo elemento del array.
join() separador. Traer los elementos del array como un string.Podemos elegir el signo que separa cada uno de los elementos del string.
length() trae la cantidad de elemenos del array.


frutas.push('melon');

console.log(frutas);
frutas.pop();

let verduleria= frutas.join('/');

console.log(verduleria);

console.log(frutas.length);

shift: elimina el primer elemento del array.
unshift: agrega elementos al principio del array.
indexOf: busca la posicion del elemento dentro del array.
slice: crea una sublista dentro de un array. 
splice:reemplazar un producto. dentro del parentesis le indico indice y la posicion que borro.
includes: busca si elemento si existe en el array o no.



let compras=['pan','leche','huevos','azucar'];
console.log('Este es mi listado de compras: '+ compras);

compras.shift();
console.log('Lista Inicial menos pan '+ compras);

compras.unshift('yerba');

console.log('Agregue a mi lista: '+ compras);

let posicionHuevos= compras.indexOf('huevos');

console.log('La posicion del elemento es: ' + posicionHuevos);

compras.push('huevos');

console.log(compras);

console.log(posicionHuevos);

let subLista= compras.slice(1,3);
console.log('Esta es mi sublista que ideo mi novia: ' + subLista);

compras.splice(2,2,'vino');

console.log('Agrego a la lista que me dieron:'+ compras);

console.log(compras.includes('vino'));

VOY A ENTRAR AL DOM.
LLAVE DEL DOM: DOCUMENT.
ID: getElementebyId busca la etiqueta por su id. 1 solo elemento
innerText:muestra o modifica texto en el html.
*/
let prendas=['remera','pantalon','buzo','boxer'];
function mostrarLista(lista){
const listaHtml=document.getElementById('lista');/* entro al dom lista donde agrego los elementos*/
listaHtml.innerHTML="";/*vaciar la lista de elementos. vacia el ul*/
/*armo un for para traer los elementos del array*/
for(let i=0;i<lista.length;i++){
  const listItem=document.createElement('li');/*creo una variable que entre al dom y agregue los elementos del array a mi listaP*/
listItem.textContent=lista[i];/* agrega a la etiqueta li texto de los elementos del array que recorre el for*/
listaHtml.appendChild(listItem);/*agrego finalmente el li al ul*/

}
};

mostrarLista(prendas);/*renderizado por primera vez*/

/*Armo una funcion que quite el producto*/


function quitarProducto(){
prendas.shift();/*shift elimina el primer elemento del array*/
mostrarLista(prendas);/* borra el contenido y vuelva a mostar el array con un elemento menos*/
document.getElementById('mensaje').innerText='Se ha eliminado el primer elemento.';
/*se agrega texto a mi parrafo llamado mensaje*/

}

/*Crear una funcion que agrega un elemento*/

function agregarProducto(){
prendas.push('pullover');/*Push agrega elemento al final del array*/
mostrarLista(prendas);

}
/*Buscar pantalon(un elemento del array)*/

function buscarProducto(){
const panta=prendas.indexOf('pantalon');/*index busca poscion dentro del array, el indice del elemento*/
if(panta !== -1 ){
document.getElementById('mensaje').textContent='pantalon esta en la posicion '+ panta;

}
/*uso condicional if para marcar que la palabra buscada esta dentro de ese array. Selecciono el indice -1 y utilizo la negativa !==*/
else{ document.getElementById('mensaje').innerText='no se encontro pantalon en la lista.'}

};

/* Nueva lista ... es armar una sublista*/

function crearSublista(){
const miniLista=prendas.slice(1,3);/*Slice metedo que armar una sublista dentro del array usando los indices de los elementos sacando el limite superior*/
document.getElementById('mensaje').textContent='La mini lista:'+ miniLista;

};

/*Reemplazar elemento del array*/

function reemplazarProducto(){
prendas.splice(1,1,'campera');/*splice metodo que saca y reemplaza a un elemento del array primera posicion indica el indice del elemento a reemplazar,segunda posicion el indice del elemento nuevo y tercera posicion nombre del elemento a agregar.*/
mostrarLista(prendas);
document.getElementById('mensaje').textContent='El elemento nuevo de mi lista es campera. ';


};


document.getElementById('botonQuitar').addEventListener('click',quitarProducto);
document.getElementById('botonAgregar').addEventListener('click',agregarProducto);
document.getElementById('botonBuscar').addEventListener('click',buscarProducto);
document.getElementById('botonMinilista').addEventListener('click',crearSublista);
document.getElementById('botonReemplazar').addEventListener('click',reemplazarProducto);










