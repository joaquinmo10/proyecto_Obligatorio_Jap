let productsArray = [];
let Sesion = localStorage.getItem("Usuario");
document.getElementById("Sesion").innerHTML = Sesion;

function setProductID(id) {
    localStorage.setItem("productID", id);
    window.location = "product-info.html";
}

function showProducts(productsArray){
    let htmlContentToAppend = "";
    for(let i = 0; i < productsArray.products.length; i++){
        let product = productsArray.products[i];

            htmlContentToAppend += `
            <div onclick="setProductID(${product.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${product.image}" alt="${product.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${product.name} - ${product.currency} ${product.cost}</h4>
                            <small class="text-muted">${product.soldCount} vendidos</small>
                        </div>
                        <p class="mb-1">${product.description}</p>
                    </div>
                </div>
            </div>
            `
        
        document.getElementById("listaDeProducto").innerHTML = htmlContentToAppend; 
    }
    document.getElementById("subtitulo_cat").innerHTML = "Verás aquí todos los productos de la categoría " + productsArray.catName;
}


document.addEventListener("DOMContentLoaded", function(){

    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productsArray = resultObj.data;
            showProducts(productsArray);
        }
    });
});


let Min = document.getElementById("rangeFilterCountMin").filter;
let Max = document.getElementById("rangeFilterCountMax").filter;

function Filtrado(){
    let filtered = productsArray;

    if(Max.value != ""){
        filtered = filtered.filter(products => 
            products.cost < Max)
    }
    if(Min.value != ""){
        filtered = filtered.filter(category => 
            category.cost > Min)
    }
    showProducts(filtered)
}


function desc(){
   productsArray.sort(function(a,b){
    return b.cost - a.cost
   })
}

function asc(){
    productsArray.sort(function(a,b){
        return a.cost - b.cost
    })
    
}

function rel(){
    productsArray.sort( function(a,b){
        return b.soldCount - a.soldCount
    })
}

function sortProductsDown(){
    showProducts(desc)
}

function sortProductsUp(){
    showProducts(asc)
}

function sortProductsRel(){
    showProducts(rel)
}


document.getElementById("rangeFilterCountMin").addEventListener('input', Filtrado);
document.getElementById("rangeFilterCountMax").addEventListener('input', Filtrado);

document.getElementById("sortAsc").addEventListener('input', sortProductsUp);
document.getElementById("sortDesc").addEventListener('input', sortProductsDown);
document.getElementById("sortByCount").addEventListener('input', sortProductsRel);






