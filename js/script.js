let navbar = document.getElementById("navbar");

document.addEventListener("click", (e) => {
  let target = e.target;
  if (target.id == "menu") {
    let menu = target;
    let close = target.nextElementSibling;
    navbar.classList.add("show");
    menu.style.display = "none";
    close.style.display = "block";
  }
  if (target.id == "close") {
    let close = target;
    let menu = target.previousElementSibling;
    navbar.classList.remove("show");
    menu.style.display = "block";
    close.style.display = "none";
  }
});
