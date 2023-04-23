let passwordInput = document.querySelector("#Password");
let confirmPasswordInput = document.querySelector("#Confirmpassword");
let submitButton = document.querySelector("button");

submitButton.addEventListener("click", function(){
    let password = passwordInput.value;
    let confirmPassword = confirmPasswordInput.value;

    if (password != confirmPassword) {
        confirmPasswordInput.setCustomValidity("Passwords Don't Match");
    }else{
        confirmPasswordInput.setCustomValidity("");
    }
    console.log(password, confirmPassword);
})