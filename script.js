let hamburger = document.querySelector(".header__menu")
let nav = document.querySelector("nav")
let closes = document.querySelector(".header__close")

hamburger.addEventListener("click", () => {
    nav.style.transform = "translateX(0%)"
    hamburger.style.display = "none"
    closes.style.display = "block"
})

closes.addEventListener("click", () => {
    nav.style.transform = "translateX(-200%)"
    closes.style.display = "none"
    hamburger.style.display = "block"
})
    