const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const main = document.querySelector("main");
const hotelcon = document.getElementById("hotelcon");

toggle.addEventListener("click", function () {
  toggle.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "white";
    main.style.background = "rgb(145, 181, 190)";
    main.style.color = "black";
    body.style.color = "black";
    body.style.transition = ".6s";
  } else {
    body.style.background = "black";
    main.style.background = "black";
    main.style.color = "white";
    body.style.color = "white";
    body.style.transition = ".6s";
    toggle.style.color = "black";
    
  }
});
