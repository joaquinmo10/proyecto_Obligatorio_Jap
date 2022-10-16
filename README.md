
<html lang="es">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>eMercado - Todo lo que busques está aquí</title>
  
  <link href="https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,700,700i,900,900i" rel="stylesheet">
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href="css/styles.css" rel="stylesheet">
  <style>
    button{
      text-transform: none;
    }
    body {
      background-color: rgb(248, 249, 250);
    }
  </style>
</head>

<body>
  <div>
    <center><img src="img/login.png" height="250"></center> 
    <form action="portada.html">
      <center>
        <h3>Inicio de sesión</h3>
        <center><h7>Usuario</h7></center> <input type="user" name="Usuario" size="35" id="user" placeholder="Usuario" required >

        <br>
            <center><h7>Email</h7></center>  <input size="35" type="email" name="Email" id="Email" placeholder="Email" required>
          
          <br>
          <center><h7>Contraseña</h7></center><input size="35" type="password" name="Contraseña" id="Contraseña" placeholder="Contraseña" required>
            
        <br>
        <br>
        <div>
          <button class="btn btn-primary btn-block" type="submit" id="Ingresar" onclick="validarFormulario()">Ingresar</button>
        </div>
       </center>
    </form>
    </div>

  <footer class="text-muted">
    <div class="container">
      <p class="float-end">
        <a href="#">Volver arriba</a>
      </p>
      <p>Este sitio forma parte de <a href="https://jovenesaprogramar.edu.uy/" target="_blank">Jovenes a Programar</a> -
        2022</p>
      <p>Clickea <a target="_blank" href="Letra.pdf">aquí</a> para descargar la letra del obligatorio.</p>
    </div>
  </footer>
  <script src="js/login.js">
  </script>
</body>

</html>
