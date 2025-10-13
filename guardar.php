<?php
// Relacionar guardar.php con conexion.php
include('conexion.php');

//Envio y recepcion de los valores del formulario.\
$nombre=$_POST['nombre'];
$mail=$_POST['mail'];

//insertar valores en la tabla usuarios.

$sql="INSERT INTO usuarios(nombre,mail)VALUES('$nombre','$mail' )";
//respuesta al registro.
if(mysqli_query($conexion,$sql)){
  echo 'Registro Exitoso.';}

else{
echo 'Error en el registro'.mysqli_error($conexion);
}

//cerrar conexion
mysqli_close($conexion);
?>