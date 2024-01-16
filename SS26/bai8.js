let random = [
    123,
    3,
    3,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
];
let check = 0;
for(let i=0; i<random.length; i++){
    for(let j=i; j<random.length; j++){
        if(random[i]==random[j]){
            check ++;
        }
        
    }
    if(check==2){
        console.log(random[i]);
    }
    check=0;
}