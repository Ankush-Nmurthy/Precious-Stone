import {data} from './my_data.js'

let continer = document.getElementById("container");
let myform = document.getElementById("form");
let name = document.getElementById("name");
let image = document.getElementById("image");
let price = document.getElementById("price")
let select1 = document.getElementById("select1");
let select2 = document.getElementById("select2");
let logout = document.getElementById("Logout");



let AdminData = JSON.parse(localStorage.getItem("adminData"))||data

displayData(AdminData)

function displayData(data1){
    continer.innerHTML = null
    data1.forEach((element,i)=> {
        let div = document.createElement("div");
        
        let image = document.createElement("img");
        image.src = element.image;

        let name = document.createElement("h3")
        name.innerText = element.name;

        let price = document.createElement("p");
        price.innerText = `$${element.price}`;

        let delButton = document.createElement("button")
        delButton.innerText = "Remove item";
        delButton.addEventListener("click",function(){
            data1.splice(i,1);
            displayData(data1)
            localStorage.setItem("adminData",JSON.stringify(data1))
        })
        div.append(image,name,price,delButton);
        continer.append(div)
    });
}


myform.addEventListener("submit",function(e){
    e.preventDefault();
    let obj = {
        name:name.value,
        image:image.value,
        price:price.value,
        category:select1.value,
        subcateg:select2.value,
    }
    console.log("hello")
    AdminData.push(obj);
    localStorage.setItem("adminData",JSON.stringify(AdminData))
    displayData(AdminData)
})

logout.addEventListener("click",function(){
    setTimeout(()=>{
        window.location.href = "./login.html"
    },500)
})