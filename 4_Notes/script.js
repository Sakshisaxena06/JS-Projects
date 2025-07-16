const notecontainer = document.querySelector(".notes-container") ;
const createBtn = document.querySelector(".btn") ;
let notes = document.querySelectorAll(".input-box") ;

function showNotes(){
    notecontainer.innerHTML = localStorage.getItem("notes") ;
}
showNotes() ; 
   
// data store nhi ho rha h !
function updatestorage(){
    localStorage.setItem("notes" , notecontainer.innerHTML)
}


createBtn.addEventListener("click" ,() => {
    let inputBox = document.createElement("p") ;
    let img = document.createElement("img") ;
    inputBox.className = "input-box" ;
    inputBox.setAttribute("contenteditable" ,"true") ;
    img.src = "Unknown-4.jpeg"
    notecontainer.appendChild(inputBox).appendChild(img);
})
notecontainer.addEventListener("click" ,function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove() ;
        updatestorage() ;

    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box")
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updatestorage() ;
            }
        })
    }
})
document.addEventListener("keydown" ,event =>{
    if(event.key=== "Enter"){
        document.execCommand("insertLineBreak") ;
        event.preventDefault() ;
    }
})