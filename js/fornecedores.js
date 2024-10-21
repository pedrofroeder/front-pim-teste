document.getElementById("logoutButton").addEventListener("click", function () {
  const confirmLogout = confirm("Deseja sair de sua conta?");
  if (confirmLogout) {
    window.location.href = "login.html"; 
  }
});

const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  hamburger.classList.toggle("active"); 
});
