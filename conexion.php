<?php
//datos de la base del hosting.
$host="sql105.infinityfree.com";
$usuario="if0_40161337";
$clave="AEczGnnRP0WBV";
$base="if0_40161337_guardar";

//conexion.
$conexion=mysqli_connect($host,$usuario,$clave,$base);

//verificar la conexion.
if(!$conexion){
die('ERROR DE CONEXION AL HOSTING.'. mysqli_connect_error());

}


?>