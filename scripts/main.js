// LIGHTBOX

const lightbox = document.querySelector("#lightbox");
const imgWrapper = document.querySelector(".img-wrapper");
const titleWrapper = document.querySelector(".img-wrapper > .img-title");
const closeBtn = lightbox.querySelector(".close-btn");
const gallery = document.querySelector(".gallery-box");
const images = gallery.querySelectorAll("img");

images.forEach((image) => {
    image.addEventListener("click", (e) => {
        lightbox.classList.add("active");
        const img = document.createElement("img");
        img.src = image.src;

        const filenameExt = image.src.substring(image.src.lastIndexOf("/") + 1);
        const filename = filenameExt.slice(0, filenameExt.length - 4);
        console.log(filename);
        const title = document.createElement("p");
        title.innerText = filename;

        if (imgWrapper.querySelector(".img-wrapper > img")) {
            imgWrapper.removeChild(
                imgWrapper.querySelector(".img-wrapper > img")
            );
        }
        imgWrapper.prepend(img);

        if (titleWrapper.querySelector("p")) {
            titleWrapper.removeChild(titleWrapper.querySelector("p"));
        }
        titleWrapper.appendChild(title);
    });
});

closeBtn.addEventListener("click", (e) => {
    lightbox.classList.remove("active");
});
