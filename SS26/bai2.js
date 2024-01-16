let index = prompt("nhập bất kỳ");
let check = 0;
let random = [
    123,
    3,
    "bún bò",
    "mèn mén"
];
for(let i=0; i<random.length; i++){
    if(index==random[i]){
        console.log("vị trí ở", i);
        check +=1;
    }
}
if(check==0){
    console.log("không có");
}