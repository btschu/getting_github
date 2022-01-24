// access github API to display user info

async function github(){
    let user = document.getElementById('user').value;
    let response = await fetch("https://api.github.com/users/" + user);
    let data = await response.json();
    console.log(data);
    document.getElementsByTagName('h1')[0].innerText = data.login + " has " + data.followers + " followers";
    document.getElementsByTagName('img')[0].setAttribute("src", data.avatar_url);
    return data
    console.log(github());
}

// trigger button when pressing enter key

var input = document.getElementById("user");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
    }
});