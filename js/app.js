const openNav = document.querySelector(".open_nav");
const navBar = document.querySelector(".nav_bar");
const navUl = document.querySelector(".nav_ul");
const closeNav = document.querySelector(".close_nav");


openNav.addEventListener("click", ()=>{
    navBar.style.display = "block"
    navUl.style.display = "block"
})

closeNav.addEventListener("click", ()=>{
    navBar.style.display = "none"
    navUl.style.display = "none"
})