let Sesion = localStorage.getItem("Usuario");
document.getElementById("Sesion").innerHTML = Sesion;


function productsInfo(product){
  console.log(product)

      document.getElementById("product-info").innerHTML += `
      <h1>` + product.name + `</h1>
      <hr class="solid">
      <h4>Precio</h4>
      <p>` + product.currency + " " +  product.cost +  `</p>
      <h4>Descripción</h4>
      <p>` + product.description+ `</p>
      <h4>Categoría</h4>
      <p>` + product.category + `</p>
      <h4>Cantidad de vendidos</h4>
      <p>` + product.soldCount + `</p>
      <h4>Imágenes ilustrativas</h4>
      `

      for(let i = 0; i < product.images.length; i++){
          if(i === 0){
              document.getElementById("carImgs").innerHTML += `<div class="carousel-item active">
              <img src="` + product.images[i] + `" class="d-block w-100" alt="image">
              </div>`
          } else {
              document.getElementById("carImgs").innerHTML += `<div class="carousel-item">
              <img src="` + product.images[i] + `" class="d-block w-100" alt="image">
              </div>`

          }
          

      }
  };

  document.addEventListener("DOMContentLoaded", function(){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;
            productsInfo(product);
            comments()
            productosRelacionados(product)
        }
    });
  });
  function commentCont(user, date, score, description){
    let htmlContentToAppend = ""
    
    htmlContentToAppend += `
    <div class="list-group-item list-group-item-action">
        <div class="row">  
            <div> `+ user +` - `+ date +` - `+ starScore(score) +`</div>
            <div>`+ description +`</div>          
        </div>
        </div>
    </div>
    `
    document.getElementById("comments").innerHTML += htmlContentToAppend
}
  
  function comments(){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
      if (resultObj.status === "ok"){
       comms = resultObj.data
for(const comment of comms){            
      commentCont(comment.user, comment.dateTime, comment.score, comment.description)};
            
}})};

function starScore(scores){
 let score =""
      
for(let i=0; i < 5; i++){
  scores > i ? score += '<span class="fa fa-star checked"></span>' : score += '<span class="far fa-star"></span>'}
      return score
};

function commUsuario(){
  date = new Date();
  const formattedDate = date.toLocaleString().replace(",","").replace("/","-").replace("/","-");
  commentCont(localStorage.getItem("Usuario"), formattedDate , document.getElementById("valoracion").value,  document.getElementById("comment").value);
};

function productosRelacionados(product){

  for(const prodRel of product.relatedProducts){
  document.getElementById("productosRel").innerHTML += `
  <div class "col">
  <div class="card h-90" id="`+ prodRel.id +`" style="width: 15rem;">
  <img class="card-img-top" src="` + prodRel.image + `" alt="Card image cap">
  <div class="card-footer">
  <p>` + prodRel.name + `</p>
  </div>
  </div>
  </div>`
  };

for(const prodRel of product.relatedProducts){

      document.getElementById(prodRel.id).addEventListener("click", function() {
          localStorage.setItem("productID", prodRel.id);
          window.location = "product-info.html"

      })
  };

};  
