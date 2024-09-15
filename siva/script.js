window.onscroll = function() {
  let navbar = document.getElementById("navbar");
  let logo = document.getElementById("logo-img");

  if (window.scrollY > 100) {
    navbar.classList.add("sticky");
    logo.src = "logo2.png"; // Change to your scrolled logo
  } else {
    navbar.classList.remove("sticky");
    logo.src = "logo1.png"; // Change to your original logo
  }
};
