function getRandom (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var Enemy = function(type){
    var type = type;
    var enemytype = "";
    var hitPoints =0;
    var defense = 0;
     this.generate = function() {
        var index = getRandom(0, type.length - 1);
        this.typeName = type[index];
         
     if (this.TypeName === "Ancient Dragon"){
          this.hitPoints = getRandom(80,100);
          this.defense = this.hitPoints * 3;
     }
    else {
        if (this.TypeName === "Prowler"){
          this.hitPoints = getRandom(50,79);
            this.defense = this.hitPoints * 3;
     }
        else {
          this.hitPoints = getRandom(20,49);   
                    this.defense = this.hitPoints * 3;
        }
    }
   
    }
}

var possibleTypes = ["Ancient Dragon","Prowler","Mighty Grunt"];

for ( var i = 0; i < 100; i++){
    var tempType = new Enemy (possibleTypes);
    tempType.generate();
console.log(tempType.typeName);
console.log(tempType.hitPoints);
console.log(tempType.defense);
  
}