/**
 * DOCU: Function for registering an account with input validation.
 * Last Updated: December 05, 2023
 * @memberof module:jQuery_The_Wall_Final
 * @author Nathaniel
 */

$(document).ready(function(){
    $("body").on("submit", "#signup_form", function(event){
        event.preventDefault();
        const inputs = $("input");
        validateForm(inputs);

        let firstname = $("#firstname").val().trim();
        let lastname = $("#lastname").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val().trim();

        if (firstname === "Nathaniel" && lastname === "Nardo" && email === "nnardo@village88.com" && password === "123456"){
            window.location.assign("dashboard.html");
        }
        else{
            alert("Please complete all details to register!");
        }
    });
});