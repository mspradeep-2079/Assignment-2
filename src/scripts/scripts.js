const header = document.getElementById("header");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});
