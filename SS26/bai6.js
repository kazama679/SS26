let numbers = [
    1,
    -1,
    5,
    -5,
    123
]; 
let am = []; 
let duong = []; 

for(let i=0; i<numbers.length; i++) {
    if(numbers[i]<0){
        am.push(numbers[i]); 
    } else{
        duong.push(numbers[i]); 
}
}
console.log(am, duong);