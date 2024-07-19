// Shopping Portal Cart Value Evaluation
 
/* Input */
const shoppingCart = [
    { name: "Apple", price: 10, quantity: 4 },
    { name: "Banana", price: 5, quantity: 5 },
    { name: "Orange", price: 15, quantity: 3 }
];
/* Input */
 
 
/* Logic Implementation Function */
async function calculateTotal(cart) {
    let total = 0;
   
    /* Write your logic here --- Start */
    for (let i = 0; i < cart.length; i++) {
        console.log(cart[i].name);
        if(cart[i].name=="Apple"){
            var appleprice=cart[i].price*cart[i].quantity;
            console.log(appleprice);
        }
        else if(cart[i].name=="Banana"){
            var bananaprice=cart[i].price*cart[i].quantity;
            console.log(bananaprice);
        }
        else if(cart[i].name=="Orange"){
            var orangeprice=cart[i].price*cart[i].quantity;
            console.log(orangeprice)
           
        }
        else{
            var bananaprice=cart[i].price*cart[i].quantity;
            console.log(bananaprice)
           
        }
        total += cart[i].price * cart[i].quantity;
    }
    /* Write your logic here --- End */
   
    return total;
}
/* Logic Implementation Function */
 
 
/* Function Call */
async function main(){
    try{
const totalCost = await calculateTotal(shoppingCart);
/* Function Call */
/* Output */
console.log('Total cost: Rs.' + totalCost);
    }catch(error){
         console.error('error calculating total:',error);
    }
}
main();
/* Output */
 
/* Expected Output */
//Total cost: Rs.110
/* Expected Output */