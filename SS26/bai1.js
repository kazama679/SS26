let check = 0;
let random = [
    123,
    3,
    "bún bò",
    false,
    true
];
for(let i=0; i<random.length; i++){
    for(let j=-100000; j<100000; j++){ 
        if(random[i]===j){
            console.log(random[i]);
            check ++;
        }
    }
}
if(check==0){
    console.log("trong mảng không tồn tại số nguyên");
}