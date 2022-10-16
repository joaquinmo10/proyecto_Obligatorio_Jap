
function validarFormulario() {
  var Usuario = document.getElementById('user').value;
    if(Usuario.length <= 8) {
      alert('El Usuario es demasiado corto.');
     
    }

    var Email = document.getElementById('Email').value;
    if(Email.length == 0) {
      alert('Hace falta un correo electronico.');
     
    }
    var Contraseña = document.getElementById('Contraseña').value;
    if (Contraseña.length== 0) {
      alert('Hace falta una contraseña');
    };
    localStorage.setItem("Usuario",Usuario);
  }
 

