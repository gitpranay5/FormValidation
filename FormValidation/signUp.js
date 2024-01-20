function formvalidation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;
    var mobile = document.getElementById("mobile").value;

    if(name== "" && email== "" && user== "" && pass== "" && mobile== ""){
        document.getElementById("Name").innerHTML = " ** please fill the name field";
        document.getElementById("Email").innerHTML = " ** please fill the email field";
        document.getElementById("User").innerHTML = " ** Username length must be between 3 and 20 & only characters are not allowed ";
        document.getElementById("Pass").innerHTML = " ** password is required";
        document.getElementById("Cpass").innerHTML = " ** confirm password is required";
        document.getElementById("Mobile").innerHTML = " ** mobile number must not be empty";

        return false;
    }
    if(email== ""){
        document.getElementById("Email").innerHTML = " ** please fill the email field";
        return false;
    }
    if(email.indexOf("@") <= 0){
        document.getElementById("Email").innerHTML = " ** Invalid email";
        return false;
    }
    if(user== ""){
        document.getElementById("User").innerHTML = " ** username must not be empty";
        return false;
    }
    if(user.length <=3 || user.length>20){
        document.getElementById("User").innerHTML = " ** Username length must be between 3 and 20";
        return false;
    }
    if(pass== ""){
        document.getElementById("Pass").innerHTML = " ** please fill the password field";
        return false;
    }
    if(pass.length<=5|| pass.length>20){
        document.getElementById("Pass").innerHTML = " ** password length must be between 5 and 20";
        return false;
    }
    if(pass!==cpass){
        document.getElementById("Cpass").innerHTML = " ** password mismatch";
        return false;
    }
    if(mobile== ""){
        document.getElementById("Mobile").innerHTML = " ** please fill the mobile numbar field";
        return false;
    }
    if(isNaN(mobile)){
        document.getElementById("Mobile").innerHTML = " ** digits only";
        return false;
    }
    if(mobile.length !=10){
        document.getElementById("Mobile").innerHTML = " ** mobile number must be 10 digits only";
        return false;
    }
}