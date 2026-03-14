let n=7;
let max= 4;
for(let i=0; i<n; i++){
let row="";
for(let j=0; j<n; j++){
let min= Math.min(i,j,n-1-i,n-1-j);
let value = max- min;
row+=value+ " ";
}
console.log(row);
}
