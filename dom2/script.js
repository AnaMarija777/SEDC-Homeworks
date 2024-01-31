

function Product(name,category,hasDiscount,price){
    this.name = name ;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;


}
let products = [
    new Product ('Jacket','Clothes',Boolean(true),35),
    new Product ('PC','Electronics',Boolean(false),1200),
    new Product ('Necklace','Jewellery',Boolean(false),350),
    new Product ('Teddy','Toy',Boolean(true),15),
    new Product ('Pizza','Food',Boolean(false),10),
    new Product ('TV','Electronics',Boolean(true),1000),
    new Product ('Carrot','Food',Boolean(false),1),
    new Product ('Jeans','Clothes',Boolean(true),17),
    new Product ('Phone','Electronict',Boolean(false),1100),
    new Product ('House','Estate',Boolean(false),200000),
    new Product ('Cake','Food',Boolean(true),20),
    new Product ('Airpods','Electronics',Boolean(false),300),
    new Product ('Bag','Accsessories',Boolean(true),150),
    new Product ('Mouse','Electronics',Boolean(false),100),
    new Product ('Cucumber','Food',Boolean(false),2),
]


products.filter(product => product.price > 20)
.map(product => `Product: ${product.name} has price: ${product.price} and its over 20`)
.forEach(product => console.log(product));

console.log('----------------------------------------------------------');

products.filter(product => product.hasDiscount == true && product.category === 'Food')
.map(product => `Product: ${product.name} is food's category and has discount`)
.forEach(product => console.log(product));

console.log('----------------------------------------------------------');

products.filter(product => /^[AEIOU]/i.test(product.name)&& product.hasDiscount !== true)
.map(product => `Product: ${product.name} starts with a vowel and its not on a discount`)
.forEach(product => console.log(product));