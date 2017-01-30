var array = [];
var Car = function ( color, model, miles) {
    this.colorcar = color;
    this.modelcar = model;
    this.miles = miles;
    this.run = function (){ 
    console.log("color:" +this.colorcar + "model:" + this.modelcar + " miles: " + this.miles + "is running");
                }
                };
    
          array.push (new Car("red", "BMW","1000"));
          array.push (new Car("Black", "Mercedes","1400"));
          array.push (new Car("green", "blablabla","5000"));
        for ( var i = 0 ; i <3 ; i++){
             array[i].run();
        }
    