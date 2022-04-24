// LIGHTBOX

const lightbox = document.querySelector("#lightbox");
const imgWrapper = document.querySelector(".img-wrapper");
const titleWrapper = document.querySelector(".img-wrapper > .img-title");
const closeBtn = lightbox.querySelector(".close-btn");
const gallery = document.querySelector(".gallery-box");
const images = gallery.querySelectorAll("img");
const prevBtn = lightbox.querySelector(".prev-btn");
const nextBtn = lightbox.querySelector(".next-btn");
let imgArray = [];

const titleFromPath = (path) => {
    const filenameExt = path.substring(path.lastIndexOf("/") + 1);
    const filename = filenameExt.slice(0, filenameExt.length - 4);
    return filename;
};

images.forEach((image, idx) => {
    image.addEventListener("click", (e) => {
        if (idx === 0) {
            prevBtn.classList.add("disabled");
        }
        if (idx === images.length - 1) {
            nextBtn.classList.add("disabled");
        }
        lightbox.classList.add("active");
        const img = document.createElement("img");
        img.src = image.src;

        const title = document.createElement("p");
        title.innerText = titleFromPath(image.src);

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

    imgArray.push({
        imgSrc: image.src,
        imgTitle: titleFromPath(image.src),
    });
});

closeBtn.addEventListener("click", (e) => {
    lightbox.classList.remove("active");
    prevBtn.classList.remove("disabled");
    nextBtn.classList.remove("disabled");
});

prevBtn.addEventListener("click", (e) => {
    const actualImg = imgWrapper.querySelector(".img-wrapper > img");
    const titleBox = imgWrapper.querySelector(".img-title > p");
    imgIndex = imgArray
        .map(function (e) {
            return e.imgSrc;
        })
        .indexOf(actualImg.src);

    if (imgIndex >= 1) {
        nextBtn.classList.remove("disabled");
        actualImg.src = imgArray[imgIndex - 1].imgSrc;
        titleBox.innerText = titleFromPath(actualImg.src);
    }
    if (imgIndex === 1) {
        prevBtn.classList.add("disabled");
    }
});

nextBtn.addEventListener("click", (e) => {
    const actualImg = imgWrapper.querySelector(".img-wrapper > img");
    const titleBox = imgWrapper.querySelector(".img-title > p");
    imgIndex = imgArray
        .map(function (e) {
            return e.imgSrc;
        })
        .indexOf(actualImg.src);

    if (imgIndex < imgArray.length - 1) {
        prevBtn.classList.remove("disabled");
        actualImg.src = imgArray[imgIndex + 1].imgSrc;
        titleBox.innerText = titleFromPath(actualImg.src);
    }
    if (imgIndex >= imgArray.length - 2) {
        nextBtn.classList.add("disabled");
    }
});
