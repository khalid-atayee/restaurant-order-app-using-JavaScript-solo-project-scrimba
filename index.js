import { menuArray } from "./data.js";
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
let content,footerContent,id;
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
    
        id = btn.dataset.id;
        menuArray.forEach(element => {
            if(element.id==id){
                
                footerContent = `<div class="footer-content">
                                        <div class="footer-name">${element.name}</div>
                                        <div class="footer-price">$${element.price}</div>
                                
                                </div>`
                
                footer.innerHTML+=footerContent;
            }
            
        });
        
        
        
        
    })
    
})
   