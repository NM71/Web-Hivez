
$(document).ready(function () {

    // Carousel JS
    let currentIndex = 0;
    const totalSlides = $(".carousel-images img").length;

    setInterval(function () {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }

        $(".carousel-images").animate({
            marginLeft: -(currentIndex * 800) + "px"
        }, 500);
    }, 3000);



    // ----------------------------------------
    // Slider JS

    let currentSliderIndex = 0;
    const slides = $(".slide");
    const totalSliders = slides.length;

    function updateSlider() {
        $(".slider-images").css(
            "transform",
            `translateX(-${currentSliderIndex * 800}px)`
        );
    }

    // next button
    $(".next").click(function () {

        if (currentSliderIndex < totalSliders - 1) {
            currentSliderIndex++;
            updateSlider();
        }

    });

    // prev button
    $(".prev").click(function () {

        if (currentSliderIndex > 0) {
            currentSliderIndex--;
            updateSlider();
        }

    });
});


$(document).ready(function () {



});