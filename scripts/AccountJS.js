function validate() {
    if (document.login.userName.value=="") {
        alert ("Please enter User Name")
        return true
    }
    if (document.login.password.value=="") {
        alert ("Please enter Password")
        return false
    }
    else {
        alert ("Successfully Logged In")
        window.location.href = "/All_Of_Games.html";
        return true;
    }
}

