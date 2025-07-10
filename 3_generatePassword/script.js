
const passwordBox = document.getElementById("password") ;
const length = 12;
const UpperCase = "ABCDEFGHIJKLMNOPQRST" ;
const lowerCase = "abcdefghijklmnopqrstuvwxvz" ;
const numbers = "1234567890";
const symbol = "!@#$%^&*():;'.," ;
const allchars = UpperCase +lowerCase + numbers + symbol ;

function createPassword (){
    let password ="" ;
    password+= UpperCase[Math.floor(Math.random() * UpperCase.length)];
    password+=lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password+=numbers[Math.floor(Math.random() * numbers.length)];
    password+=symbol[Math.floor(Math.random() * symbol.length)];
   
    while(length > password.length){
        password+=allchars[Math.floor(Math.random() * allchars.length)] ;
    }
    passwordBox.value = password ;
    
    
}

function copy(){
    passwordBox.select()
document.execCommand("copy")  // this command is use for copy ..
}