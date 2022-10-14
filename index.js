import  menuArray  from "./data.js";


const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const footerTitle = document.querySelector('.footer-title');
const model = document.querySelector('.model');
const successAlert = document.querySelector('.success-alert')


let content, footerContent, resultTotal, id, orders = []
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
    main.innerHTML += content
});

const btns = document.querySelectorAll('.btn');
btns.forEach((btn) => {
    btn.addEventListener('click', () => {

        id = btn.dataset.id;
        menuArray.forEach(element => {
            if (element.id == id) {
            successAlert.classList.remove('show-alert')


                orders.push(element)
                renderOrder(orders)
            }

        });




    })

})

function renderOrder(orders) {
    footer.innerHTML = '';
    let orderPrice = 0;
    orders.forEach(element => {
        orderPrice = orderPrice + element.price
        
        
        
        footerContent =

        `<div class="footer-content">
        
            <div class="footer-name">
            <p> ${element.name}</p>
            <button data-id="${element.id}" class="btn-danger">remove</button>
            </div>
            <div class="footer-price">$${element.price}</div>
        </div>`
        
        footerTitle.classList.add('show')
        footer.innerHTML +=footerContent

        resultTotal = 
        `<div class="total-content">
            <p class="total-price">Total Price:</p>
            <p clsss="price">$${orderPrice}</p>
            </div>
            <button class="order-btn">Complete Order</button>
        `

    })

    footer.innerHTML += resultTotal;
    
}
document.addEventListener('click',(event)=>{
    let object_id ;
        if(event.target.classList.contains('btn-danger')){
            object_id= event.target.dataset.id
            orders = orders.filter(order=>{
                return order.id!=object_id

            })

            renderOrder(orders)
            if(orders.length==0){
                footer.innerHTML='';
            }

        }
        if(event.target.classList.contains('order-btn')){
            model.classList.add('show-model')
        

        }

})
model.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formContent = new FormData(model)
    const name = formContent.get('name')
    const card = formContent.get('card')
    const cvv = formContent.get('cvv')
    model.classList.remove('show-model')
    footer.innerHTML='';
    successAlert.textContent = `Thanks, ${name} Your order is on its way`
    successAlert.classList.add('show-alert')
    
})




