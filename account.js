var loginForm = document.getElementById("loginForm");
var regForm = document.getElementById("regForm");
var indicator = document.getElementById("indicator");

function login(){
    loginForm.style.transform = "translateX(300px)"
    regForm.style.transform = "translateX(300px)"
    indicator.style.transform = "translateX(0px)"
}

function register(){
    loginForm.style.transform = "translateX(0px)"
    regForm.style.transform = "translateX(0px)"
    indicator.style.transform = "translateX(105px)"

}