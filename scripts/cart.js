let cartItems = JSON.parse(localStorage.getItem('cart')) || []
let left = document.getElementById('left')
let totalId = document.getElementById('total')
let checkoutBtn = document.querySelector("#right > button");
window.onload = function (){
    display(cartItems)
    let total = calTotal(cartItems);
    totalId.innerText = `$${total}`
}

function display(data){
    left.innerHTML  = null;
    data.map((e,i)=>{
         let div = document.createElement('div')
         let imageDiv = document.createElement('div')
         let textDiv = document.createElement('div')
         let buttonDiv = document.createElement('div')

         let image = document.createElement('img')
         image.src = e.image;

         let title = document.createElement('h4')
         title.innerText = e.name
         let price = document.createElement('h5')
         price.innerText = `$${e.price}`
        
         let buttonAdd = document.createElement('button')
         buttonAdd.textContent = '+'
         buttonAdd.addEventListener('click',function(){
               add(e.id)
         })

         let buttonSub = document.createElement('button')
         buttonSub.textContent = '-'
         buttonSub.addEventListener('click',function(){
            sub(e.id)
         })

         let remove = document.createElement('button')
         remove.innerText = 'Remove'
         remove.style.display = 'block'
         remove.style.margin = 'auto'
         remove.style.marginTop = '10px'

         remove.addEventListener('click',function(){
             cartItems.splice(i,1);
             localStorage.setItem('cart',JSON.stringify(cartItems))
             let total = calTotal(cartItems);
             totalId.textContent = `$${total}`
             display(cartItems);
         })

         let quant = document.createElement('button')
         quant.innerText = e.q;

         buttonDiv.append(buttonSub,quant,buttonAdd,remove)

         imageDiv.append(image)
         textDiv.append(title,price)
         div.append(imageDiv,textDiv,buttonDiv)
         left.append(div)
    })
}


function calTotal(cartItems){
    let sum = 0;
    for(let i=0;i<cartItems.length;i++){
        sum+= (cartItems[i].price*cartItems[i].q)
    }
    return sum;
}

function add(id){
    cartItems = cartItems.map((e)=>{
         if(e.id===id){
             e.q+=1
         }
         return e;
    })
    let total = calTotal(cartItems)
    totalId.innerText = `$${total}`
    display(cartItems)
    localStorage.setItem('cart',JSON.stringify(cartItems))
    console.log(cartItems);
}

function sub(id){
    cartItems = cartItems.map((e)=>{
        if(e.id===id && e.q > 1){
            e.q-=1
        }
        return e;
   })
   let total = calTotal(cartItems)
   totalId.innerText = `$${total}`
   display(cartItems)
   localStorage.setItem('cart',JSON.stringify(cartItems))
   console.log(cartItems);
}

checkoutBtn.addEventListener("click",function(){
    alert("your order is successfully placed" +"\n" + "Thanks for placing the order" +"\n"+"Visit again")
})