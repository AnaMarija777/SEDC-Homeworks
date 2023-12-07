let phonePrice = 119.95;
let taxRate = 5;
 
function priceWithTax(quantity){
    let result = quantity *  (phonePrice + ((phonePrice * taxRate)/100));
    return result;
}
let firstSum = priceWithTax(30);
console.log(firstSum);
