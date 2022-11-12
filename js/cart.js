let Sesion = localStorage.getItem("Usuario");
document.getElementById("Sesion").innerHTML = Sesion;
function cartProduct(prod){
     let htmlContentToAppend = "";
 htmlContentToAppend += `
        <div class="row pt-1" id="${prod.id}">
          <div class="col-1 cursor-active" onclick="prodInfo(${prod.id})"><img src=${prod.image} alt="product image" class="w-75"></div>
          <div class="col-2 cursor-active" onclick="prodInfo(${prod.id})">${prod.name}</div>
          <div class="col-2">${prod.currency + " " + prod.unitCost}</div>
          <div class="col-2"><input type="text" class="form-control w-75" id="amount" placeholder="Cantidad" onkeyup="subtotal(this,${prod.unitCost})" required></input></div>
          <div class="row col-2">${prod.currency} <div class="col-6" id="${prod.id}Subtotal">${prod.unitCost}</div></div>
          <div class="col-2" onclick="cleanObj()"><i class="fa fa-trash" style="font-size:20px;color:red" ></i></div>
        </div>
        `
    document.getElementById("cartDesk").innerHTML += htmlContentToAppend;
}
function subtotal(amount, cost){   
    const Subtotal = amount.closest(".row").querySelector(".col-6")
    if(amount.value != 0){ Subtotal.innerHTML = amount.value * cost
    }else{Subtotal.innerHTML = 0}
} 
function cleanObj(){
    document.getElementById("cartDesk").innerHTML = ""   
};
function prodInfo(productID){
    localStorage.setItem("prodID", productID);
    window.location = "product-info.html"
  }
  document.addEventListener("DOMContentLoaded", function(){

    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            for(var articulo of resultObj.data.articles){
                console.log(articulo)
                cartProduct(articulo)
                       
            }}
    });
});
function checkForm(unchecked,checked){
let formNo = unchecked.parentElement.querySelectorAll(".form-control")
let formSi = checked.parentElement.querySelectorAll(".form-control")
for(form of formNo){form.setAttribute("disabled","")}
for(form of formSi){form.removeAttribute("disabled")}
    checked.id === "metodo1" ? document.getElementById("seleccionado").innerHTML = "Tarjeta de crédito" : document.getElementById("seleccionado").innerHTML = "Transferencia bancaria"
}
function validacionDeModal(){
for(form of document.getElementById("payMethodModal").querySelectorAll("[required]")){
        if(!(form.checkValidity())){
            document.getElementById("modalToggler").classList.add("is-invalid")
            document.getElementById("seleccionado").classList.add("text-danger")
        } else {
            document.getElementById("modalToggler").classList.remove("is-invalid")
            document.getElementById("seleccionado").classList.remove("text-danger")
        }
    }
}
(function validacionTotal () {
    var form = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(form)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()){
            event.preventDefault()
            event.stopPropagation()
          } else { 
            event.preventDefault()
            event.stopPropagation()
            document.querySelector(".alert-success").removeAttribute("hidden")           
          }
          validacionDeModal()
          form.classList.add('was-validated')
        }, false)
      })
  })()

 
