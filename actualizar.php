<?php
$conexion= new mysqli('localhost','root','','comercio');
if($conexion->connect_error){
die('error de conexion'.$conexion->connect_error);
}
$id_producto=$_POST['Id_Producto'];
$stock=$_POST['Stock'];





?>