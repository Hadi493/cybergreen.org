let menu = document.querySelector(".menu")
let showMenu = document.querySelector(".show-menu");
let hideMenu = document.querySelector(".hide-menu");
let main = document.querySelector("main");

function menuBar() {
  showMenu.addEventListener("click", function() {
    menu.style.display = "block"
    main.style.backgroundColor = "#ccc"
  })
  
  hideMenu.addEventListener("click", function() {
    menu.style.display = "none"
    main.style.backgroundColor = "#1F2526"
  })
}

menuBar()