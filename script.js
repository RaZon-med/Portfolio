function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  
  
  // Run on page load and on window resize
  window.addEventListener("resize", adjustEmailText);
  window.addEventListener("DOMContentLoaded", adjustEmailText);
  
  
//for whatsapp
  document.getElementById("whatsappButton").addEventListener("click", function() {
    window.open("https://wa.me/9866241286", "_blank");
});
