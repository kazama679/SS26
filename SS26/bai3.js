let index = prompt("nhập bất kỳ");
let check = 0;
let random = [
    123,
    3,
    3,
    1,
    1,
    1,
    1,
];
for(let i=0; i<random.length; i++){
    if(index==random[i]){
        check ++;
    }
}
if(check==0){
    console.log("không có trong danh sách");
} else{
    console.log("số lần xuất hiện", check);
}