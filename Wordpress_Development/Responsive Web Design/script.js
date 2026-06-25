$(document).ready(function () {
    // Setting an index for image
    let currentIndex = 0;

    const totalSlides = $('.slide-text').length;

    console.log(`Total Slides are: ${totalSlides}`);


    // Function to update slides
    function updateSlider(index) {
        // Updating text
        $('.slide-text').removeClass('active');
        $(`.slide-text[data-index="${index}"]`).addClass('active');


        $('.image-card').removeClass('active next far-next furthest-next');

        // Assigning classes based on position
        $('.image-card').each(function () {
            let cardIndex = parseInt($(this).data('index'));

            if (cardIndex === index) {
                $(this).addClass('active');
            }
            else if (cardIndex === (index + 1) % totalSlides) {
                $(this).addClass('next');
            }
            else if (cardIndex === (index + 2) % totalSlides) {
                $(this).addClass('far-next');
            }
            else if (cardIndex === (index + 3) % totalSlides) {
                $(this).addClass('furthest-next');
            }
            else {
                $(this).addClass('furthest-next');

            }
        });
    }

    // Function for Button Navigation
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