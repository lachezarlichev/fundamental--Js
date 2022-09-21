function leap(num){
    if( isleapYears = (num % 4 === 0 && num % 100 !== 0) || num % 400 === 0){
    console.log(`yes`);
    }else{
        console.log(`no`);
    }
}
leap(1984)