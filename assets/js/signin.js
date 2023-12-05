$(document).ready(function(){
    $("body").on("submit", "#signin_form", processSignInForm);
})

/**
 * DOCU: Function for logging in an account with input validation.
 * Last Updated: December 05, 2023
 * @memberof module:jQuery_The_Wall_Final
 * @author Nathaniel
 */

function processSignInForm(event){
    event.preventDefault();
    const inputs = $("input");
    validateForm(inputs);

    let email = $("#email").val().trim();
    let password = $("#password").val().trim();

    if (email !== "" && password !== ""){
        window.location.assign("dashboard.html");
    }
    else{
        alert("Please enter a valid email and password!");
    }
}