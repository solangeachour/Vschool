var genFibNums = function (){
var fibs = [0,1];
for (var i= 2; i<=100; i++)
{
var temp = fibs[i-2] + fibs[i-1];
fibs.push (temp);
}
return fibs;
}
var nums = genFibNums();
console.log(nums.length);


let genFibNums = > (){
let fibs = [0,1];
for (let i= 2; i<=100; i++)
{
let temp = fibs[i-2] + fibs[i-1];
fibs.push (temp);
}
return fibs;
}
let nums = genFibNums();
console.log(nums.length);


