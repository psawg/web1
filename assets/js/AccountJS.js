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
        alert ("dang nhap thanh cong")
        window.location.href = '/All_Of_Games.html';
        return true
    } 
}
function showPass(element) {
    if (element.type === "password") {
        element.type = "text";
    } else {
        element.type = "password";
    }
}

