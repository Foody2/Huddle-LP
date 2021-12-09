const email = document.getElementById("email");
const error = document.getElementById("error");

function validateEmail() {
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(email) == false) {
    email.style.border = "1px solid hsl(0, 100%, 63%)";
    error.style.display = "block";
    return false;
  } else {
    return true;
  }
}
