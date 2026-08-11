```javascript
document.addEventListener("DOMContentLoaded", function () {

    const photos = document.querySelectorAll(".photo-card img");

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    const closeButton = document.getElementById("lightboxClose");
    const prevButton = document.getElementById("lightboxPrev");
    const nextButton = document.getElementById("lightboxNext");

    const counter = document.getElementById("lightboxCounter");

    let currentPhoto = 0;


    // فتح الصورة
    photos.forEach(function (photo, index) {

        photo.style.cursor = "pointer";

        photo.addEventListener("click", function () {

            currentPhoto = index;

            lightboxImage.src = photo.src;
            lightboxImage.alt = photo.alt;

            counter.textContent =
                (currentPhoto + 1) + " / " + photos.length;

            lightbox.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });


    // الصورة التالية
    nextButton.addEventListener("click", function (event) {

        event.stopPropagation();

        currentPhoto++;

        if (currentPhoto >= photos.length) {
            currentPhoto = 0;
        }

        lightboxImage.src = photos[currentPhoto].src;
        lightboxImage.alt = photos[currentPhoto].alt;

        counter.textContent =
            (currentPhoto + 1) + " / " + photos.length;

    });


    // الصورة السابقة
    prevButton.addEventListener("click", function (event) {

        event.stopPropagation();

        currentPhoto--;

        if (currentPhoto < 0) {
            currentPhoto = photos.length - 1;
        }

        lightboxImage.src = photos[currentPhoto].src;
        lightboxImage.alt = photos[currentPhoto].alt;

        counter.textContent =
            (currentPhoto + 1) + " / " + photos.length;

    });


    // إغلاق
    closeButton.addEventListener("click", function () {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    });


    // إغلاق عند الضغط على الخلفية
    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {

            lightbox.classList.remove("active");

            document.body.style.overflow = "";

        }

    });


    // الكيبورد
    document.addEventListener("keydown", function (event) {

        if (!lightbox.classList.contains("active")) {
            return;
        }

        if (event.key === "Escape") {

            lightbox.classList.remove("active");

            document.body.style.overflow = "";

        }

        if (event.key === "ArrowLeft") {

            nextButton.click();

        }

        if (event.key === "ArrowRight") {

            prevButton.click();

        }

    });

});
```
