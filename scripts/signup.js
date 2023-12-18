// // validation form register and register user local storage
// function validateRegistration() {
// const inputUsernameRegister = document.querySelector(".input-signup-username");
// const inputPasswordRegister = document.querySelector(".input-signup-password");
// const btnRegister = document.querySelector(".signup__signInButton");

// // validation form register and register user local storage

// function check (e) {
//     regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
//     if(regex.test(e)){
      
//     } else {
//       alert("Khong phai la email")
//       inputUsernameRegister.value = ""
//     }

// } 

// function checkPassWord (e , min) {
//   regex = /[1-9]/
//   if (!regex.test(e) || e.length < min) {
//     alert("vui long nhap du 6 ki tu va ki tu phai la so")
//   } 
// }

// inputUsernameRegister.addEventListener('blur',() => {
//   check(inputUsernameRegister.value)  
// })

// inputPasswordRegister.addEventListener('blur' , ()=> {
//   checkPassWord(inputPasswordRegister.value , 6)
// })

// btnRegister.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (
//     inputUsernameRegister.value === "" ||
//     inputPasswordRegister.value === ""
//   ) {
//     alert("vui lòng không để trống");
//   } else {

//     // array user
//     const user = {
//       username: inputUsernameRegister.value,
//       password: inputPasswordRegister.value,
//     };
//     let json = JSON.stringify(user);
//     localStorage.setItem(inputUsernameRegister.value, json);
//     alert("Đăng Ký Thành Công");
//     window.location.href = "login.html";
//   }
// });
// }
function validateRegistration() {
  const inputUsernameRegister = document.querySelector(".input-signup-username");
  const inputPasswordRegister = document.querySelector(".input-signup-password");

  function check(e) {
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (!regex.test(e)) {
          alert("Khong phai la email");
          inputUsernameRegister.value = "";
          return false;
      }
      return true;
  }

  function checkPassword(e, min) {
      const regex = /[1-9]/;
      if (!regex.test(e) || e.length < min) {
          alert("Vui lòng nhập ít nhất 6 kí tự và kí tự phải là số");
          return false;
      }
      return true;
  }

  const confirmPassword = document.getElementsByName("confirmPassword")[0].value;

  if (
      inputUsernameRegister.value === "" ||
      inputPasswordRegister.value === "" ||
      confirmPassword === ""
  ) {
      alert("Vui lòng không để trống");
      return false;
  }

  if (!check(inputUsernameRegister.value) || !checkPassword(inputPasswordRegister.value, 6)) {
      return false;
  }

  if (inputPasswordRegister.value !== confirmPassword) {
      alert("Mật khẩu và xác nhận mật khẩu không khớp");
      return false;
  }

  const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
  };
  const json = JSON.stringify(user);
  localStorage.setItem(inputUsernameRegister.value, json);
  alert("Đăng Ký Thành Công");
  window.location.href = "login.html";

  return false; // prevent form submission
}