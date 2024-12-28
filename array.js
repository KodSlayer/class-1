//program to print all the even numbers in an array

const num=[10,11,12,13,14,15,16];

for(let i=0;i<num.length;i++) {
    if(num[i]%2==0) {
        console.log(num[i]);
    }
}
console.log();
console.log();
//print biggest number in an array
const age=[12,11,10,18,63,45,93,1,34,92,54,99];
let temp=age[0];
for(let i=0;i<age.length;i++) {
    if(temp<age[i]) {
        temp=age[i];
    }
}
console.log(temp);