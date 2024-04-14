const generateOtp = document.getElementById("generate-otp");
const displayOtp = document.getElementById("display-otp");

generateOtp.addEventListener("click", () => {
  const digits = "0123456789";
  let otp = "";

  for (let i = 0; i < 6; i++) {
    otp += digits[Math.floor(Math.random() * digits.length)];
  }

  displayOtp.value = otp;
});
