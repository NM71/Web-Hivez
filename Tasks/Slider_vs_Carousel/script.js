
// $(document).ready(function () {

//     // Carousel JS
//     let currentIndex = 0;
//     const totalSlides = $(".carousel-images img").length;

//     const slideWidth = $(".carousel").outerWidth();


//     setInterval(function () {
//         currentIndex++;
//         if (currentIndex >= totalSlides) {
//             currentIndex = 0;
//         }

//         $(".carousel-images").animate({
//             marginLeft: -(currentIndex * slideWidth) + "px"
//         }, 500);
//         // $(".carousel-images").animate({
//         //     marginLeft: -(currentIndex * 33.3) + "vw"
//         // }, 500);
//     }, 3000);



//     // ----------------------------------------
//     // Slider JS

//     let currentSliderIndex = 0;
//     const slides = $(".slide");
//     const totalSliders = slides.length;

//     function updateSlider() {
//         $(".slider-images").css(
//             "transform",
//             `translateX(-${currentSliderIndex * 100}vw)`
//         );
//     }

//     // next button
//     $(".next").click(function () {

//         if (currentSliderIndex < totalSliders - 1) {
//             currentSliderIndex++;
//             updateSlider();
//         }

//     });

//     // prev button
//     $(".prev").click(function () {

//         if (currentSliderIndex > 0) {
//             currentSliderIndex--;
//             updateSlider();
//         }

//     });
// });


// $(document).ready(function () {



// });



$(document).ready(function () {

    // Carousel JS

    setInterval(function () {
        // Calculate the width of one image + the 10px gap you set in CSS
        const imgWidth = $(".carousel-images img").first().outerWidth();
        const gap = 10;
        const slideDistance = imgWidth + gap;

        // Animate the container to the left by 1 image
        $(".carousel-images").animate({
            marginLeft: -slideDistance + "px"
        }, 1000, function () {
            // Callback function: Once animation finishes, move the first image to the end
            $(this).css('marginLeft', 0).append($(this).find("img:first"));
        });
    }, 3000);


    //    Slider JS

    let currentSliderPage = 0;
    const slides = $(".slide");
    const totalSlides = slides.length;

    // Since I know there are 3 items per view, so dividing total slides by 3 gives us total pages
    const itemsPerView = 3;
    const maxPages = Math.ceil(totalSlides / itemsPerView) - 1;

    function updateSlider() {
        $(".slider-images").css(
            "transform",
            `translateX(-${currentSliderPage * 99}vw)`
        );
    }

    // Next button
    $(".next").click(function () {
        if (currentSliderPage < maxPages) {
            currentSliderPage++;
            updateSlider();
        }
    });

    // Previous button
    $(".prev").click(function () {
        if (currentSliderPage > 0) {
            currentSliderPage--;
            updateSlider();
        }
    });

});