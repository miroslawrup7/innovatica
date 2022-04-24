// LIGHTBOX

const lightbox = document.querySelector("#lightbox");
const imgWrapper = document.querySelector(".img-wrapper");
const closeBtn = lightbox.querySelector(".close-btn");
const gallery = document.querySelector(".gallery-box");
const images = gallery.querySelectorAll("img");

images.forEach((image) => {
    image.addEventListener("click", (e) => {
        lightbox.classList.add("active");
        const img = document.createElement("img");
        console.log(image.src);
        img.src = image.src;

        if (imgWrapper.querySelector(".img-wrapper > img")) {
            imgWrapper.removeChild(
                imgWrapper.querySelector(".img-wrapper > img")
            );
        }
        imgWrapper.appendChild(img);
    });
});

closeBtn.addEventListener("click", (e) => {
    lightbox.classList.remove("active");
});
