let arr1 = [1,2,3,4,5];
let arr2 = [-3,-1,0,1,5];
let arr3 = [1,5,6,7];
let arr4 =[];

console.log("Các phần tử trùng nhau của 3 mảng là: ");

for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
        for(let k=0; k<arr3.length; k++){
            if(arr1[i]===arr2[j]&&arr1[i]===arr3[k]&&arr2[j]===arr3[k]){
                arr4.push(arr1[i]);
            }
        }
    }
}
console.log(arr4);