/*Arranco la transformacion de modo claro a modo oscuro
const body=document.body;llamo al body
const modoBtn=document.getElementById('modo-btn');llamo al boton del header
const cursos=document.getElementById('cursos')llamo a la section
const cursosBtn=document.getElementById('cursos-btn');llama al boton de esa seccion
const compras=document.getElementById('compras');
const comprasBtn=document.getElementById('compras-btn');
Llamo a la seccion contactos y a su boton por separado
const contactos=document.getElementById('contacto');
const contactoBtn=document.getElementById('contacto-btn');


Funcion para cambiar el color del body

function cambiarModoBody(){
if(body.classList.contains('dark-mode')){
body.classList.remove('dark-mode');
modoBtn.textContent='Modo-Oscuro';

}else{
body.classList.add('dark-mode');
modoBtn.textContent="Modo-claro";
}

};

modoBtn.addEventListener('click',cambiarModoBody);

function cambiarModoSecciones(seccion,boton){
if(seccion.classList.contains('dark-mode')){
seccion.classList.remove('dark-mode');
boton.textContent='Modo-oscuro';
}else{
  seccion.classList.add('dark-mode');
  boton.textContent='Modo-claro';
}


}

cursosBtn.addEventListener('click',()=>cambiarModoSecciones(cursos,cursosBtn));*/

const body=document.body;
const modoBtn=document.getElementById('modo-btn');

function toggleModo(){
body.classList.toggle('dark-mode');

if(body.classList.contains('dark-mode')){
modoBtn.textContent='Modo-Claro';
}else {

modoBtn.textContent='Modo-Oscuro';

}



};

modoBtn.addEventListener('click',toggleModo);


const btnMenu=document.getElementById('btn-menu');
const menu=document.getElementById('menu');

btnMenu.addEventListener('click',()=>{
menu.classList.toggle('show');

});

const formulario=document.getElementById('formulario');
const respuesta=document.getElementById('respuesta');

/*<<<<<< VERSION BASICO>>>>>>>>>>>>>>>>>

formulario.addEventListener('submit',function(e){
  e.preventDefault();/* evitar que los datos se envien por la propiedad del submit. 
  const nombre=document.getElementById('nombre').value.trim();
  const mail=document.getElementById('mail').value.trim();
  const mensaje=document.getElementById('mensaje').value.trim();
if(nombre===''|| mail===''||mensaje==='')
{
respuesta.innerHTML='<p class="error"> Faltan datos, revise nuevamente el formulario </p>';
return;

}
respuesta.innerHTML="<p class='correcto'>Formulario enviado</p>";

formulario.reset();

});*/

formulario.addEventListener('submit',function(e){
e.preventDefault();
const nombre=document.getElementById('nombre').value.trim();
const mail=document.getElementById('mail').value.trim();
const telefono=document.getElementById('telefono').value.trim();
const edad=document.getElementById('edad').value.trim();
const mensaje=document.getElementById('mensaje').value.trim();
if(nombre==="" ||mail===""|| telefono===""|| edad===""|| mensaje===""){
respuesta.innerHTML="<p class='error'> Todos los campos son obligatorios";
return;};

/*Validar Mail*/
const mailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!mailRegex.test(mail)){
respuesta.innerHTML="<p class='error'> Mail invalido</p>"
return;

}
/*VALIDAR TELEFONO*/
if(!/^\d{7,}$/.test(telefono)){
respuesta.innerHTML="<p class='error'>Telefono invalido debe tener minimo 7 numeros</p>";
return;
}
})

/*VALIDAR EDAD*/

const edadNumber=Number(edad);
if(edadNumber>1 || edadNumber<120){
respuesta.innerHTML='<p class="error"> Su edad es incorrecta, la edad sugerida es de 1 a 120 anos</p>';return;

}


