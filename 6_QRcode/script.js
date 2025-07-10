let imgBox = document.getElementById("imgBox") ;
let qrimg = document.getElementById("qrimage") ;
let qrText = document.getElementById("qrText");

// const api = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
function generateQR(){
if(qrText.value.length > 0 ){
 qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value ;
 
}
else{
   qrText.classList.add('error');
   setTimeout(()=>{
    qrText.classList.remove('error') ;
   },1000) ;
}
}