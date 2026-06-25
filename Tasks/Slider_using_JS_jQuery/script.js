$(document).ready(function () {
    let currentIndex = 0;
    const totalSlides = $('.slide-text').length;
    console.log(totalSlides);

    function updateSlider(index) {
        // 1. Update text visibility
        $('.slide-text').removeClass('active');
        $(`.slide-text[data-index="${index}"]`).addClass('active');

        // 2. Clear ALL structural classes from image cards
        $('.image-card').removeClass('active next far-next furthest-next');

        // 3. Re-assign classes to images relative to the current index
        $('.image-card').each(function () {
            let cardIndex = parseInt($(this).data('index'));

            if (cardIndex === index) {
                $(this).addClass('active');
            } else if (cardIndex === (index + 1) % totalSlides) {
                $(this).addClass('next');
            } else if (cardIndex === (index + 2) % totalSlides) {
                $(this).addClass('far-next');
            } else if (cardIndex === (index + 3) % totalSlides) {
                // NEW: Assign the 4th layer state
                $(this).addClass('furthest-next');
            } else {
                // Default fallback for any remaining hidden cards
                $(this).addClass('furthest-next');
            }
        });
    }

    // Next Button Click
    $('.next-btn').click(function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider(currentIndex);
    });
    $(document).keydown(function (e) {
        if (e.key === 'ArrowRight') { // Next slide with Right Arrow
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider(currentIndex);
        } else if (e.key === 'ArrowLeft') { // Previous slide with Left Arrow
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider(currentIndex);
        }
    });

    // Previous Button Click
    $('.prev-btn').click(function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider(currentIndex);
    });
});





