function validate() {
    var username = document.login.userName.value;
    var password = document.login.password.value;

    // Biến để lưu trữ thông điệp
    var errorMessage = "";

    // Kiểm tra username và password không được để trống
    if (username === "") {
        errorMessage += "Vui lòng nhập tên người dùng.\n";
    }

    if (password === "") {
        errorMessage += "Vui lòng nhập mật khẩu.\n";
    }

    // Kiểm tra mật khẩu theo yêu cầu
    var passwordRegex = new RegExp(
        "^(?=.*[A-Z])" +                // ít nhất một chữ hoa
        "(?=.*\\d)" +                   // ít nhất một số
        "(?=.*[!@#$%^&*()_+])" +        // ít nhất một ký tự đặc biệt
        "[A-Za-z\\d!@#$%^&*()_+]{8,}$"  // ít nhất 8 ký tự
    );

    if (!passwordRegex.test(password)) {
        if (!/(?=.*[A-Z])/.test(password)) {
            errorMessage += "Mật khẩu phải có ít nhất một chữ hoa.\n";
        }

        if (!/(?=.*\d)/.test(password)) {
            errorMessage += "Mật khẩu phải có ít nhất một số.\n";
        }

        if (!/(?=.*[!@#$%^&*()_+])/.test(password)) {
            errorMessage += "Mật khẩu phải có ít nhất một ký tự đặc biệt.\n";
        }

        if (password.length < 8) {
            errorMessage += "Mật khẩu phải có ít nhất 8 ký tự.\n";
        }
    }

    // Hiển thị thông báo nếu có lỗi
    if (errorMessage !== "") {
        alert(errorMessage);
        return false;
    }

    // Nếu mọi điều kiện đều đáp ứng, thông báo đăng nhập thành công và chuyển hướng trang
    alert("Đăng nhập thành công");
    window.location.assign("../../All_Of_Games.html")
    // return true;
}

