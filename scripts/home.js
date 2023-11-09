import {data} from './my_data.js'
let massage = data
console.log(massage)
let prevBtn = document.getElementById("btn-1");
let nextBtn = document.getElementById("btn-2");
let imageInDiv = document.querySelector("#grid > div:nth-child(1)>img");

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

document.getElementById('searchinput').addEventListener('input',function(){
     let value = document.getElementById('searchinput').value;
     document.getElementById('content').style.display = 'block'
     display(value)
})

function display(search=""){
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