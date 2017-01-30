var person = {
       name:"lina",
       phone:"70/896543",
       grades:90
};
 var teacher = {
      name:"chadi",
       adress:"saida",
       Material:"Computer"
 };
 var director = {
       name:"Leen",
       phone:"70/896543",
       natinality:"Lebanon"
       
};
 var item = {
      name:"chocolate",
       color:"white",
       weight: "30g"
 };
 var car = {
       type:"merceds",
       model:"2012",
       color:"red"
//      console.log("I am driving at " + in the " + type + "car " + model + " car");
   
};
var Person= function(name, phone, adress, city, natinality){
    this.ObjectName = this.name;
    this.ObjectPhone = this.phone;
    this.ObjectAdress = this.adress;
    this.ObjectCity= this.city;
    this.ObjectNatinality= this.natinality;
     this.start = function() {
   console.log("what is your name" + this.ObjectName  + "Person");
     
};
    var jameel = new Person ("jameel");
    var location = function(adress,city){
        console.log("this location is" + this.ObjectAdress + "Person" + this.ObjectCity + "Person");
        adress(city);
    }
    
 var locationPer = function(adress,city,natinality){
        console.log("this location is" + this.ObjectAdress + "Person" + this.ObjectCity + "Person" + 
                    this.ObjectNatinality + "Person");
        adress(city,natinality);
    }
    
var call = function(phone,city){
        console.log("this location is" +   this.ObjectPhone + "Person" + this.ObjectCity + "Person");
        phone(city);
    }
    
var Personality = function(name,natinality){
        console.log("is" +   this.ObjectName+ "Person" + this.ObjectNatinality + "Person");
        name(natinality);
    }
}
    
      var newPerson = new Person("Samir","0024455689","Achrafiye","Beirut","lebanon");
       newPerson.start(newPerson.location, newPerson);