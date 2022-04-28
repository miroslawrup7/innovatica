// MOBILE MENU
const nav = document.querySelector(".navigation");
const ham = document.querySelector(".hamburger");
const wrapper = document.querySelector(".wrapper");
const header = document.querySelector("header");
const content = document.querySelector(".content");
const logo = document.querySelector(".logo");

ham.addEventListener("click", (e) => {
    nav.classList.add("mobile-open");
    wrapper.classList.add("mobile-open");
    header.classList.add("mobile-open");
    content.classList.add("mobile-open");
    logo.classList.add("mobile-open");
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".navigation") && !e.target.closest(".hamburger")) {
        nav.classList.remove("mobile-open");
        wrapper.classList.remove("mobile-open");
        header.classList.remove("mobile-open");
        content.classList.remove("mobile-open");
        logo.classList.remove("mobile-open");
    }
});
