let Sesion = localStorage.getItem("Usuario");
document.getElementById("Sesion").innerHTML = Sesion;

document.getElementById("email").value = localStorage.getItem("Email")

function userSav(){
    let userInfo = {
      firstName: document.getElementById("firstName").value,
      secondName: document.getElementById("secondName").value,
      surname: document.getElementById("surname").value,
      secondSurname: document.getElementById("surname2").value,
      phone: document.getElementById("phone").value,
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  };

function infoSaved(){
    return JSON.parse(localStorage.getItem("userInfo"));
}
function showInfoSav(){
    if (infoSaved()) {
      let info = infoSaved();
      document.getElementById("firstName").value = info.firstName;
      document.getElementById("secondName").value = info.secondName;
      document.getElementById("surname").value = info.surname;
      document.getElementById("surname2").value = info.secondSurname;
      document.getElementById("phone").value = info.phone;
    }
  };
  
  showInfoSav();
