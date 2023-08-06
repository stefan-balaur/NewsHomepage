const navbar = document.querySelector("nav");
const openButton = document.querySelector(".open-menu"); 
const closeButton = document.querySelector(".close-menu");

openButton.addEventListener("click", () => {
    navbar.classList.add("open");
});

closeButton.addEventListener("click", () => {
    navbar.classList.remove("open");
});
