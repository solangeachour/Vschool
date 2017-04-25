var Item = function (name, price,quantity){
    this.name =name || "Chocolate";
    this.price = price || 2;
    this .quantity = function(){
        console.log(this.name +" this nice");
    }
}
 var cheese = new Item ("cheese",1500,4);
var  chocolate = new Item ("chocolate",2500,11);
 chocolate.quantity();
var ItemA = {
    name:"Pepsi",
    price: 750,
    quantity:6
}
var ItemA = {
    name:"Milk",
    price: 17500,
    quantity:2
}