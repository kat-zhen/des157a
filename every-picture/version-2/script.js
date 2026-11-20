(function () {
    "use strict";
    console.log("reading js");

    // selects the slideshow
    const slideshow = document.querySelector(".slideshow");
    
    // duplicates all pics
    const pictures = slideshow.innerHTML;
    slideshow.innerHTML = pictures + pictures;

    // moves pics up continously
    slideshow.animate(
        [
            { transform: "translateY(0)"},
            { transform: "translateY(-50%)"}
        ],
        {
            duration: 60000,
            iterations: Infinity,
            easing: "linear"
        }
    );

    // selects all pics and captions
    const photos = document.querySelectorAll(".slideshow img");
    const captions = document.querySelectorAll(".captions div");

    // connects each pic to its caption
    for (let i = 0; i < photos.length; i++) {

        // finds matching caption
        const caption = captions[i % captions.length];

        // shows caption when hovering over a pic
        photos[i].addEventListener("mouseenter", function() {
            caption.classList.add("show");
        });

        // hides the captions when mouse leaves pic
        photos[i].addEventListener("mouseleave", function() {
            caption.classList.remove("show");
        });
    }

})();
