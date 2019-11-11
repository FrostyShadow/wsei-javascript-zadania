// Zadanie 0

function Basket(){
    this.products = [];
    this.sum = 0;
}

Basket.prototype.addProduct = function(name, price){
    this.products.push({name, price});
    this.sum += price;
}

Basket.prototype.showBasket = function(){
    console.log(`Your basket contents:`)
    console.log(this.products);
    console.log(`Total amount to pay: ${this.sum} zł`)
}

var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();