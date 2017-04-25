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
    name:undefined,
    age:104,
    isTasty:true
}
console.log(validate(obj));
module.exports = validate;