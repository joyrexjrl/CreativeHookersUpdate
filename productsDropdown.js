const productDropdowns = document.querySelectorAll(".product-type");

productDropdowns.forEach(productDropdown => {
    productDropdown.addEventListener("click", event => {
        const currentlyOpenProduct = document.querySelector(".product-type.active");
        if(currentlyOpenProduct && currentlyOpenProduct!==productDropdown){
            currentlyOpenProduct.classList.toggle("active");
            currentlyOpenProduct.nextElementSibling.style.maxHeight = 0;            
        }

        productDropdown.classList.toggle("active");
        const productPics = productDropdown.nextElementSibling;
        if(productDropdown.classList.contains("active")){
            productPics.style.maxHeight = productPics.scrollHeight + "px";
        }else{
            productPics.style.maxHeight = 0;
        }
    });
});