const nav = document.querySelector(".primary-navigation")
const navToggle = document.querySelector(".mobile-nav-toggle");


// toggle menu on press
navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible")
    if (visibility === "false") {
        nav.setAttribute("data-visible", true)
    } else {
        nav.setAttribute("data-visible", false)
    }
})