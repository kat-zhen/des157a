(function () {
    "use strict";
    console.log("reading js");

   const slideshow = document.querySelector(".slideshow");
   const pictures = slideshow.innerHTML;
   const desktop = window.matchMedia("(min-width: 800px)");

   // duplicate pics on desktop
   if (desktop.matches) {
    slideshow.innerHTML = pictures + pictures;
   }

   // moves pics continuously on desktop 
   if (desktop.matches) {
    slideshow.animate(
        [
            { transform: "translateY(0)" },
            { transform: "translateY(-50%)" }
        ],
        {
            duration: 60000,
            iterations: Infinity,
            easing: "linear"
        }
    );
   }

   // selects all pics and captions
   const photos = document.querySelectorAll(".slideshow img");
   const captions = document.querySelectorAll(".captions div");

   // matches each pic to its caption 
   for (let i = 0; i < photos.length; i++) {
        const caption= document.querySelector("#" + photos[i].dataset.caption);

        // shows captions when hovering on desktop
        photos[i].addEventListener("mouseenter", function() {
            if (desktop.matches) {
                for (let j = 0; j < captions.length; j++) {
                    captions[j].classList.remove("show");
                }

                caption.classList.add("show");
            }

        });

        // hides captions when move leaves pic
        photos[i].addEventListener("mouseleave", function() {
            if (desktop.matches) {
                caption.classList.remove("show");
            }
        });

        // shows captions when clicking on mobile
        photos[i].addEventListener("click", function() {
            if (!desktop.matches) {
                for (let j = 0; j < captions.length; j++) {
                    captions[j].classList.remove("show");
                }

                caption.classList.add("show");
            }
        });

    }

   })();