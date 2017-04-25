
let genFibNums = ()=> {
  let fibs = [0,1];
for (let i= 2; i< 100; i++)
{
let temp = fibs[i-2] + fibs[i-1];
fibs.push (temp);
}
return fibs;
  
}
let gr = genFibNums();
console.log(genFibNums());
console.log(`length is ${genFibNums().length}`);
console.log(the length + gr.length);