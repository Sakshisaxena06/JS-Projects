var NameError = document.getElementById('name-error') ;
var PhoneError = document.getElementById('phone-error');
var EmailError = document.getElementById('email-error') ;
var messageError = document.getElementById('message-error') ;
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value  ;  
    if(name.length == 0){
        NameError.innerHTML="Name is required";
        return false;
    }
    // if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    //     NameError.innerHTML= 'Write full name' ;
    //     return false;

    // }
    NameError.innerHTML = "valid"  ; 
    return true
     ;
}

function validPhone(){
    var phone = document.getElementById('phone-name').value  ;  
    if(phone.length == 0 ){
        PhoneError.innerHTML="phone no. is required";
        return false;
    }
    if(phone.length!=10){
        PhoneError.innerHTML ="No. should be 10"
return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        PhoneError.innerHTML="only digits" ;
        return false;
    }
    PhoneError.innerHTML = "valid"  ; 
    return true ;
}
function validEmail(){
    var email = document.getElementById("email-name").value;
    if(email.length==0){
        EmailError.innerHTML="email is required";
        return false;
        
    }
//     if(!email.match(/^[A-Za-z]\.\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
// EmailError.innerHTML ="Email invalid" ;
// return false;
//     }

    EmailError.innerHTML = "valid" ;
    return true;
}

function validMessage(){
    var message = document.getElementById("message-name").value;
    if(message.length==0){
        messageError.innerHTML="message is required";
        return false;
    }
    messageError.innerHTML = "valid" ;
    return true;
}
function submit(e){
    e.preventDefault();
    if(!validateName() || !validEmail() || !validPhone() || !validMessage()){
        submitError.style.display='block' ;
        submitError.innerHTML='Fix this error';
        setTimeout(function(){submitError.tyle.display='none'} , 3000) ;
        return false;
    
    }
    // submitError.innerHTML="submit"
    // return true;
}
document.getElementById("submit-btn").addEventListener("click",submit) ;