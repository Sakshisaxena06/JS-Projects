const date=document.getElementById("date");
const day  = document.getElementById("day");
const month= document.getElementById("month") ;
const year = document.getElementById("year") ;
 


const today =  new Date();
console.log(today);

const weekdays = ["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"] ;
const allmonths =["January","Feburary","March","April","May","June","July","August","September","October","November","December"] ;

 
 date.innerHTML= today.getDate();
 day.innerHTML=weekdays[today.getDay()];
 month.innerHTML= allmonths[today.getMonth()];
 year.innerHTML= today.getFullYear();
 