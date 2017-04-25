var validate = function (obj){
    for (key in obj){
        if(obj[key]== undefined || obj[key]== ""){
            return {
                pass:false,failure:"r=error missing value for" + key}
            
            }
        }
    return { pass:true};
    }
var obj = {
  
     FirstName:undefined,
    LastName:undefined,
    Living:true,
    bountyAmount:100,
    type:""
}
console.log(validate(obj));
module.exports = validate;