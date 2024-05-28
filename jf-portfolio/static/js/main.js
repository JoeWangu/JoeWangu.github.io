// Toggle mobile menu
const hamburger = document.querySelector(".hamburger");
const navbarRight = document.querySelector(".navbar-right");

hamburger.addEventListener("click", () => {
  navbarRight.classList.toggle("active");
});

// Smooth scroll
const links = document.querySelectorAll(".navbar-right a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.offsetTop - 80;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
}
