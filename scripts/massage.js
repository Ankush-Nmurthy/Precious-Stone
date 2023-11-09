import {data} from './my_data.js';
let massage = data.filter((e)=>e.category === 'massage')
for(let i=1;i<=massage.length;i++){
    massage[i-1].id = i;
}





let cartItem = JSON.parse(localStorage.getItem('cart')) || []
window.onload = display(massage)
let sort = document.getElementById('sort');

function display(data){
     document.getElementById('products').innerHTML = null
     console.log(data);
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

document.getElementById('searchinput').addEventListener('input',function(){
    let value = document.getElementById('searchinput').value;
    document.getElementById('content').style.display = 'block'
    searchdisplay(value)
})

function searchdisplay(search=""){
   console.log("inside search.")
   if(search === ""){
       document.getElementById('content').style.display = 'none'
       return;
   }
   document.getElementById('content').innerHTML = null
    massage.filter((e)=>e.name.toLowerCase().includes(search)).map((e)=>{
       let div = document.createElement('div')
        div.style.display = 'flex'
        div.style.alignItems = 'center'
        let name = document.createElement('h5');
        name.textContent = e.name;
      
        let image = document.createElement('img')
        image.src = e.image
        image.style.width = '90px'
        div.append(image,name)
        document.getElementById('content').append(div)
    })
}