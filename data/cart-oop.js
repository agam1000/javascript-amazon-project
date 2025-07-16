const cart={
    cartItems:undefined,
    loadFromStorage:function(){
        this.cartItems=JSON.parse(localStorage.getItem('cart-oop'));
        if(!this.cartItems){
            this.cartItems=[{
                productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity:2,
                deliveryOptionsId:'1'
            },{
                productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity:1,
                deliveryOptionsId:'2'

            }];   
        }  
    },
    saveToStorage(){
        localStorage.setItem('cart-oop',JSON.stringify(this.cartItems));//saved as a string
    },

}




export function addToCart(productId,button){
    
    let matchingItem;
    cart.forEach((item)=>{
        if(productId===item.productId){
            matchingItem=item;
        }
    });
    const quantitySelector=document.querySelector(`.js-quantity-selector-${button.dataset.productId}`);
    const quantity=Number(quantitySelector.value);
    if(matchingItem){
        matchingItem.quantity+=quantity
    }else{
        cart.push({
            productId:productId,
            quantity:quantity,
            deliveryOptionId:'1'
        });
    }
    saveToStorage()
}

export function removeFromCart(productId){
    const newCart=[];
    cart.forEach((cartItem)=>{
        if(cartItem.productId!==productId){
            newCart.push(cartItem);
        }
    });
    cart = newCart;
    saveToStorage();
}
export function updateDeliveryOptions(productId,deliveryOptionId){
    let matchingItem;
    cart.forEach((cartItem)=>{
        if(productId===cartItem.productId){
            matchingItem=cartItem;
        }
    });
    matchingItem.deliveryOptionsId=deliveryOptionId;
    saveToStorage();
}