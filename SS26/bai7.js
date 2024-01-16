let arr = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];
let number = +prompt("Nhập số nguyên");
let sum=0;
let start=0;
for(let i=0; i<arr.length; i++){
    sum+=arr[i];
    while(sum>number&& start<i){
        sum -=arr[start];
        start++;
    }
    if(sum===number){
        console.log(arr.slice(start, i+1));
        break;
    }
}
if(sum !==number){
    console.log("Không có mảng con thỏa mãn");
}