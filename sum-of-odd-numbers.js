function sum(num){
    let sum = 0
    let odd = 1
    for(let i = 0;i<num;i++){


console.log(odd);
sum += odd
odd = odd + 2

    }console.log(`Sum: ${sum}`);
}
sum(5)