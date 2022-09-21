function tetro(string,num){

switch(string){
    case `Weekday`:
        if(num>=0 &&num<=18){
            console.log(`12`+`$`);
        }else if(num>18 && num<=64){
            console.log(`18`+`$`);
        }else if(num>64 && num<=122){
            console.log(`12`+`$`);
        } ;break
    case `Weekend` :
        if(num>=0 &&num<=18){
            console.log(`15`+`$`);
        }else if(num>18 && num<=64){
            console.log(`20`+`$`);
        }else if(num>64 && num<=122){
            console.log(`15`+`$`);
        } else{
            console.log(`Error!`);
        } ;break
    case `Holiday`:
        if(num>=0 &&num<=18){
            console.log(`5`+`$`);
        }else if(num>18 && num<=64){
            console.log(`12`+`$`);
        }else if(num>64 && num<=122){
            console.log(`10`+`$`);
            
        }else{
            console.log(`Error!`);
        } ;break
        
}
}
tetro(`Weekday`,1000)