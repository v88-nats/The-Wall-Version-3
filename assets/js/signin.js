/**
 * DOCU: Function for logging in an account with input validation.
 * Last Updated: December 05, 2023
 * @memberof module:jQuery_The_Wall_Final
 * @author Nathaniel
 */

$(document).ready(function(){
    $("body").on("submit", "#signin_form", function(event){
        event.preventDefault();
        const inputs = $("input");
        validateForm(inputs);

        let email = $("#email").val().trim();
        let password = $("#password").val().trim();

        if (email === "nnardo@village88.com" && password === "123456"){
            window.location.assign("dashboard.html");
        }
        else{
            alert("Please enter a valid email and password!");
        }
    });
});