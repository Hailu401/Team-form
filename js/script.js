function submitForm() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const phoneNumberRegex = /^\+\d+$/;

  if (!phoneNumberRegex.test(phone)) {
    let err = document.getElementById("err");
    err.append("Please enter a valid phone number with your country code.");
    err.style.color = "red";
    return;
  }

  const message = `Name: ${name}\nPhone: ${phone}\nMessage: i want to join your team to do an exercise on github`;
  const whatsappNumber = "+251961970177";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappLink, "_self");

  document.getElementById('interestForm').hide();
  document.getElementById("successMessage").style.display = "block";
}
