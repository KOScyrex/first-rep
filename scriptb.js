let form = document.querySelector("form").id
let button = document.querySelector("button")
let userName = 'admin'
let userPassword = 'qwerty'

button.addEventListener('click', function() {
    if(form === "autorization") {
        let inputs = document.querySelectorAll('input')
    
        if(login.value === userName
        && password.value === userPassword) {
            alert("Authorization not successful")
        } else {
            alert("Incorrect login or password")
        }
    } else if(form === "registration") {
        
    }
})

document.addEventListener("DOMContentLoaded", function() {
    const login = document.getElementById("login");
    
    if (login) {
        login.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }
});