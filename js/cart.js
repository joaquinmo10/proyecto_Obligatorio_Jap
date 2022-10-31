let Sesion = localStorage.getItem("Usuario");
document.getElementById("Sesion").innerHTML = Sesion;

function cartProduct(prod){
    
    let htmlContentToAppend = "";

    htmlContentToAppend += `
        <div class="row pt-1" id="${prod.id}">
          <div class="col-1 cursor-active" onclick="prodInfo(${prod.id})"><img src=${prod.image} alt="product image" class="w-75"></div>
          <div class="col-2 cursor-active" onclick="prodInfo(${prod.id})">${prod.name}</div>
          <div class="col-2">${prod.currency + " " + prod.unitCost}</div>
          <div class="col-2"><input type="number" class="form-control w-75" id="amount" placeholder="Cantidad" onkeyup="subtotal(this,${prod.unitCost})"></input></div>
          <div class="row col-2">${prod.currency} <div class="col-6" id="${prod.id}Subtotal">${prod.unitCost}</div></div>
        </div>
        `
    document.getElementById("cartDesk").innerHTML += htmlContentToAppend;
}
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
    
function cleanCart(){
    
    document.getElementById("cartDesk").innerHTML = ""   
};

function subtotal(prodAmountForm, productCost){
    
    const total = document.getElementById(prodAmountForm.parentElement.parentElement.id + "Subtotal")

    if(prodAmountForm.value != 0){ total.innerHTML = prodAmountForm.value * productCost} else{
        total.innerHTML = productCost
    }}
