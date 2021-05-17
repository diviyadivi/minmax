let array=[1,2,3,4,5,6,7,8];
let evens=array.filter(array=>array%2==0);
console.log(evens);


let arr1=[21,93,49,98,80,10];
let max=arr1[0];
for(i=0;i<arr1.length;i++){
    if(arr1[i]>=max){
        max=arr1[i];
    }
}
console.log(max);

let arr1=[21,93,49,98,80,10];
let min=arr1[0];
for(i=0;i<arr1.length;i++){
    if(arr1[i],min){
        min=arr1[i];
    }
}
console.log(min);

let array=[12,37,90,10,80];
let arr=[3,47,12,58,22];
let concat=[...array,...arr];
console.log(concat.sort());
let max=Math.max(...array);
console.log(max);
