document.addEventListener("DOMContentLoaded", function () {
  const displayText = document.getElementById("displayText");
  const text = "Halo, Saya Yayan Gisna Yudasti";
  let index = 0;

  function typeText() {
    if (index < text.length) {
      displayText.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, 100); // Sesuaikan kecepatan mengetik
    } else {
      setTimeout(() => {
        displayText.textContent = "";
        index = 0;
        typeText();
      }, 1000); // Jeda sebelum mengulang
    }
  }

  typeText();
});


