import {data} from './my_data.js';
let massage = data.filter((e)=>e.category === 'sleep')
for(let i=1;i<=massage.length;i++){
    massage[i-1].id = i;
}
let cartItem = JSON.parse(localStorage.getItem('cart')) || []
window.onload = display(massage)
let sort = document.getElementById('sort');

function display(data){
     document.getElementById('products').innerHTML = null
     data.map((e)=>{
         let div = document.createElement('div');

         let image = document.createElement('img')
         image.src = e.image
         let title = document.createElement('h3')
         title.textContent = e.name
         let price = document.createElement('p')
         price.textContent = `$${e.price}`
         let button = document.createElement('button')
         button.textContent = 'Add To Cart'
         button.addEventListener('click',function(){
             if(isPresent(e)){
                 alert('Product is already in cart')
             }else{
                cartItem.push({...e,q:1})
                localStorage.setItem('cart',JSON.stringify(cartItem))
             }
         })

         div.append(image,title,price,button)

         document.getElementById('products').append(div);
     })
}

sort.addEventListener('change',function(){
     let sortBy = sort.value;

     if(sortBy === 'asc'){
         massage.sort((a,b)=>a.price-b.price)
         display(massage)
     }else if(sortBy === 'desc'){
        massage.sort((a,b)=>b.price-a.price)
        display(massage)
     }else{
        display(massage)
     }
})

function isPresent(ele){
   for(let i=0;i<cartItem.length;i++){
       if(cartItem[i].id === ele.id){
           return true;
       }
   }
   return false;
}