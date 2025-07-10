let image = document.getElementById("avatar");
let name = document.getElementById("name") ;
let followers = document.getElementById("followers") ;
let github = document.getElementById("githubApi") ;


 async function fetchUserData(){
     const username = github.value.trim();
  if (!username) {
    alert("Please enter a GitHub username.");
    return;
  }
  const api= `https://api.github.com/users/${username}` ;
const response = await fetch(api);
const data = await response.json();
console.log(data);

image.src = data.avatar_url ;
name.innerText = "Name :" + data.name
followers.innerHTML = "Followers : " +  data.followers ; 
github.value = "" ;


}