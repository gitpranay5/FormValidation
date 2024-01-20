function loginformvalidation(){
    var Username = document.getElementById("name").value;
    var Pass = document.getElementById("pass").value;

    if(Username== "" && Pass== ""){
        document.getElementById("Username").innerHTML = " ** username must not be empty";
        document.getElementById("Pass").innerHTML = " ** password is required";

        return false;
    }
    
    if(Username.length <=3 || Username.length>20){
        document.getElementById("Username").innerHTML = " ** Username length must be between 3 and 20";
        return false;
    }
    
    if(Pass.length<=5|| Pass.length>20){
        document.getElementById("Pass").innerHTML = " ** password length must be between 5 and 20";
        return false;
    }

}