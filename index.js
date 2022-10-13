import { menuArray } from "./data.js";
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
let content,footerContent,id, arraContent=[];
menuArray.forEach((menu) => {
  content = `<div class="content">
                    <div class="description">
                        <div class="item-description">
                                <div class="emoji">${menu.emoji}</div>
                                <div>
                                    <div class="title">${menu.name}</div>
                                    <div class="title-description">${menu.ingredients}</div>
                                    <div class="title-price">$${menu.price}</div>
                                </div>
                           
                        </div>
                    </div>
                    <button data-id="${menu.id}" class="btn">+</button>
            </div>`;
  main.innerHTML += content;
});

const btns = document.querySelectorAll('.btn');
btns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        // demo =`<div class="footer-title">Your Order</div>`;
        // demo = 'Your Order'

        id = btn.dataset.id;
        menuArray.forEach(element => {
            if(element.id==id){
                // arraContent.push(element)
                
                footerContent = `<div class="footer-content">
                                        <div class="footer-name">${element.name}</div>
                                        <div class="footer-price">$${element.price}</div>
                                
                                </div>`
                
                // console.log(arraContent.forEach(element => console.log(element)));
                footer.innerHTML+=footerContent;
            }
            
        });
        
        
        
        
    })
    
})
   