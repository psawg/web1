// // validation form login
// const inputUsername = document.querySelector(".input-login-username");
// const inputPassword = document.querySelector(".input-login-password");
// const btnLogin = document.querySelector(".login__signInButton");

// // validation form login
// btnLogin.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (inputUsername.value === "" || inputPassword.value === "") {
//     alert("vui lòng không để trống");
//   } else {
//     const user = JSON.parse(localStorage.getItem(inputUsername.value));
//     if (
//       user.username === inputUsername.value &&
//       user.password === inputPassword.value
//     ) {
//       alert("Đăng Nhập Thành Công");
//       window.location.href = "/All_Of_Games.html";
//     } else {
//       alert("Đăng Nhập Thất Bại");
//     }
//   }
// });
function validateLogin() {
  const inputUsername = document.querySelector(".input-login-username");
  const inputPassword = document.querySelector(".input-login-password");

  if (inputUsername.value === "" || inputPassword.value === "") {
      alert("Vui lòng không để trống");
      return false;
  } else {
      const user = JSON.parse(localStorage.getItem(inputUsername.value));
      if (user && user.password === inputPassword.value) {
          alert("Đăng Nhập Thành Công");
          window.location.href = "/All_Of_Games.html";
      } else {
          alert("Đăng Nhập Thất Bại");
      }
  }
  return false; // prevent form submission
}