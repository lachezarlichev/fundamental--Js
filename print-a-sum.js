function print(start,end){
    let row = ""
    let sum = 0
    for(let i =start;i<=end;i++ ){
row += i+ " "
sum = sum + i
}console.log(row);
console.log(`Sum: ${sum}`);
}
print(5,10)