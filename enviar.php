<?php
//conectar a mysql que en este caso es la app phpmyadmin ("host","usuario","contrasena","base de datos")
$conexion=new mysqli("localhost","root","","comercio");

//Verificar si la conexion esta ok o no.
if($conexion->connect_error){
die("Error en la conexion".$conexion->connect_error);
}
//Recibir datos en la tabla creada en myadmin.Los datos son enviados desde el formulario. Metodo POST.

$nombre= $_POST['NOMBRE'];
$mail= $_POST['MAIL'];
$dni= $_POST['DNI'];
$fecha_nac=$_POST['FECHA_NACIMIENTO'];

//USO LOS COMANDOS DE SQL PARA PODER INSERTAR LOS DATOS A LA BASE DE DATOS.

$sql="INSERT INTO clientes(NOMBRE,MAIL,DNI,FECHA_NACIMIENTO) VALUES ('$nombre', '$mail','$dni','$fecha_nac' )";

//Ejecutar consulta.Insertar datos.

if($conexion->query($sql)===TRUE){
echo "El cliente se agrego de manera correcta.";
}else {
echo"Error en la carga de datos del cliente". $conexion->error;

};
//CORTO LA CONEXION DEL ARCHIVO PHP Y SUS FUNCIONES.
$conexion->close();
?>