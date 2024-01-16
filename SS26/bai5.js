let check = 0;
let random = [
    123,
    3,
    "bún bò",
    false,
    true
];

console.log("mảng trc khi đảo");
for(let i=0; i<random.length; i++){
    console.log(random[i]);
}

console.log("mảng sau khi đảo");
for(let i=random.length; i>=0; i--){
    console.log(random[i]);
}
