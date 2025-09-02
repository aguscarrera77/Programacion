/*Arranco la transformacion de modo claro a modo oscuro*/
const body=document.body;/*llamo al body*/
const modoBtn=document.getElementById('modo-btn');/*llamo al boton del header*/
const cursos=document.getElementById('cursos');/*llamo a la section*/
const cursosBtn=document.getElementById('cursos-btn');/*llama al boton de esa seccion*/
const compras=document.getElementById('compras');
const comprasBtn=document.getElementById('compras-btn');
/*Llamo a la seccion contactos y a su boton por separado*/
const contactos=document.getElementById('contacto');
const contactoBtn=document.getElementById('contacto-btn');


/*Funcion para cambiar el color del body*/

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

cursosBtn.addEventListener('click',()=>cambiarModoSecciones(cursos,cursosBtn));