var allproducts = document.querySelectorAll(".products li")
var showproducts = document.querySelector(".show-products")
var btn = document.getElementById("btn")
var showprice = document.getElementById("show-price")
var totalprice=0

allproducts.forEach(function(item){
    item.onclick = function(){
        showproducts.innerHTML += item.textContent + " - "
        totalprice+= +(item.getAttribute("price"))

        if(showproducts.innerHTML != ""){
        btn.style.display="block"
        showprice.style.display="block" }
    }
})
btn.onclick = function(){
    showprice.innerHTML = totalprice +"$"
}