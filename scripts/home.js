let prevBtn = document.getElementById("btn-1");
let nextBtn = document.getElementById("btn-2");
let imageInDiv = document.querySelector("#grid > div:nth-child(1)>img");
let add_to_cart = document.getElementById("add-to-cart") 

let image_array_1 = ["https://cdn.shopify.com/s/files/1/0262/2226/4423/files/gun1_1600x.png?v=1676812714","https://cdn.shopify.com/s/files/1/0262/2226/4423/files/newyearbanner-4_1600x.png?v=1672417750","https://cdn.shopify.com/s/files/1/0262/2226/4423/files/salebanner1_1600x.png?v=1673019270"];

let index_count_1 = 0;


prevBtn.addEventListener("click",function(){
    index_count_1--;
    if(index_count_1 < 0){
        index_count_1 = image_array_1.length-1;
    }
    imageInDiv.src = image_array_1[index_count_1]
});

nextBtn.addEventListener("click",function(){
    index_count_1++;
    if(index_count_1 > image_array_1.length-1){
        index_count_1 = 0;
    }
    imageInDiv.src = image_array_1[index_count_1]
});

add_to_cart.addEventListener("click",function(){
    
})