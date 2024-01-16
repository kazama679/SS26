let a =+prompt("Nhập a");
let b =+prompt("Nhập b");
let numbers =[];
if(a>b){
    for(let i=1; i<a; i++){
        if(i%b===0){
            numbers.push(i);
        }
    }
} else{
    for(let i=1; i<b; i++){
        if(i%a===0){
            numbers.push(i);
        }
    }
}
console.log(numbers);