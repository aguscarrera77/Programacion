const titulo=document.getElementById('titulo');
const lista=document.getElementById('lista');
const btnCambiar=document.getElementById('btnCambiar');
const btnResaltar=document.getElementById('btnResaltar');
const btnAgregar=document.getElementById('btnAgregar');
const btnQuitar=document.getElementById('btnQuitar');


function cambiarTitulo(){
titulo.innerText='Titulo cambiado desde Js.';
titulo.classList.toggle('text-danger');


};

function resaltar(){
const parrafos=document.getElementsByClassName('texto');
for(let i=0;i<parrafos.length;i++)
{parrafos[i].classList.toggle('fw-bold');
parrafos[i].classList.toggle('text-primary')

};

};

function agregarItem(){
const nuevoItem=document.createElement('li');/*Creo un elemento dentro del dom con creatElement. Pero todavia no lo agrego*/
lista.appendChild(nuevoItem);/*appendChild: agregue el elemento guardado en la variable.*/
nuevoItem.className='list-item';
nuevoItem.innerText='Nuevo Item';


};

function quitarItem(){
if(lista.lastElementChild){
lista.removeChild(lista.lastElementChild);

};


};


btnCambiar.addEventListener('click',cambiarTitulo);
btnResaltar.addEventListener('click',resaltar);
btnAgregar.addEventListener('click',agregarItem);
btnQuitar.addEventListener('click',quitarItem);











