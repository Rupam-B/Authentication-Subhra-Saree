let titleField = document.getElementById('title-field')
let nameField = document.getElementById('name-input-field')
let Signupbtn = document.getElementById('Sign-up-btn')
let Signinbtn = document.getElementById('Sign-in-btn')

Signinbtn.onclick = function(){
    nameField.style.maxHeight = "0";
    titleField.innerHTML = "Sign In"
    Signinbtn.classList.remove('disabled')
    Signupbtn.classList.add('disabled')

    const email=document.getElementById("enter-email").value;
    const password=document.getElementById("enter-password").value;

    if (email == "") {
        return;
    }
    const getData = JSON.parse(localStorage.getItem('user'));
     

    if(getData.email === email && getData.password === password ){
        

        window.location.assign("https://subhra-saree-website.netlify.app/");

    }
    else{
        alert("Wrong Email Id/Password")
    }

}


Signupbtn.onclick = function(){
    nameField.style.maxHeight = "65px";
    titleField.innerHTML = "Sign Up"
    Signinbtn.classList.add('disabled')
    Signupbtn.classList.remove('disabled')

    const username=document.getElementById("enter-user").value;
    const email=document.getElementById("enter-email").value;
    const password=document.getElementById("enter-password").value;

    const user ={
        username: username,
        email:email,
        password:password
    }

    
localStorage.setItem('user' , JSON.stringify(user));
alert('Sign Up succesfull');
window.location.reload();

    
}


