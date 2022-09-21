function tri(num){
    
    for(let i = 1;i<=num;i++){
        let row = ""
        
        for(let y = 1;y<=i;y++){
            row +=  `${i} `
            
        }
        console.log(row);
    }
}
tri(3)