let titleField = document.getElementById('title-field')
let nameField = document.getElementById('name-input-field')
let Signupbtn = document.getElementById('Sign-up-btn')
let Signinbtn = document.getElementById('Sign-in-btn')

Signinbtn.onclick = function(){
    nameField.style.maxHeight = "0";
    titleField.innerHTML = "Sign In"
    Signinbtn.classList.remove('disabled')
    Signupbtn.classList.add('disabled')
}
Signupbtn.onclick = function(){
    nameField.style.maxHeight = "65px";
    titleField.innerHTML = "Sign Up"
    Signinbtn.classList.add('disabled')
    Signupbtn.classList.remove('disabled')
}
