function sendMessage() {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  firstName.value = "";
  lastName.value = "";
  phone.value = "";
  email.value = "";
  message.value = "";
}
