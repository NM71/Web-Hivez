$(document).ready(function () {

    $('#menu-toggle').on('change', function () {
        $('.hamburger i').toggleClass('fa-bars fa-xmark', this.checked);
    });


    // ========================================================
    // const $track = $(".slides-track");
    // const $slides = $(".slide");
    // const $dotsContainer = $(".slider-dots");
    // let currentIndex = 0;
    // const totalSlides = $slides.length;
    // let slideInterval;

    // // 1. Generate pagination dots
    // for (let i = 0; i < totalSlides; i++) {
    //     $dotsContainer.append(`<span class="dot ${i === 0 ? "active" : ""}" data-index="${i}"></span>`);
    // }
    // const $dots = $(".slider-dots .dot");

    // // 2. Horizontal Slide Logic using translateX
    // function goToSlide(index) {
    //     if (index < 0) {
    //         index = totalSlides - 1; // Wrap to end
    //     } else if (index >= totalSlides) {
    //         index = 0; // Wrap to beginning
    //     }

    //     // Shift the track horizontally
    //     $track.css("transform", `translateX(-${index * 100}%)`);

    //     // Update active dot
    //     $dots.removeClass("active").eq(index).addClass("active");

    //     currentIndex = index;
    // }

    // // 3. Auto-play logic (every 4 seconds)
    // function startAutoSlide() {
    //     slideInterval = setInterval(function () {
    //         goToSlide(currentIndex + 1);
    //     }, 4000);
    // }

    // function stopAutoSlide() {
    //     clearInterval(slideInterval);
    // }

    // startAutoSlide();

    // // Pause on hover
    // $(".testimonial-slider-wrapper").hover(stopAutoSlide, startAutoSlide);

    // // 4. Button Controls
    // $(".prev-btn").on("click", function () {
    //     goToSlide(currentIndex - 1);
    // });

    // $(".next-btn").on("click", function () {
    //     goToSlide(currentIndex + 1);
    // });

    // $dotsContainer.on("click", ".dot", function () {
    //     const targetIndex = $(this).data("index");
    //     if (targetIndex !== currentIndex) {
    //         goToSlide(targetIndex);
    //     }
    // });

    const $track = $(".slides-track");
    const $originalSlides = $(".slide");
    const $dotsContainer = $(".slider-dots");
    const originalCount = $originalSlides.length;

    let currentIndex = 1; // Start at 1 (since index 0 will hold our cloned last slide)
    let isTransitioning = false;
    let slideInterval;

    // 1. Generate pagination dots for original slides
    for (let i = 0; i < originalCount; i++) {
        $dotsContainer.append(`<span class="dot ${i === 0 ? "active" : ""}" data-index="${i}"></span>`);
    }
    const $dots = $(".slider-dots .dot");

    // 2. Clone first and last slides for seamless looping
    const $firstClone = $originalSlides.first().clone().addClass("clone");
    const $lastClone = $originalSlides.last().clone().addClass("clone");

    $track.append($firstClone);
    $track.prepend($lastClone);

    // Initial positioning on the real first slide (index 1) without animation
    $track.css({
        "transition": "none",
        "transform": `translateX(-${currentIndex * 100}%)`
    });

    // 3. Main Slide Navigation Function
    function goToSlide(index, animate = true) {
        if (isTransitioning && animate) return; // Prevent spam-click glitches

        currentIndex = index;

        if (animate) {
            isTransitioning = true;
            $track.css("transition", "transform 0.5s ease-in-out");
        } else {
            $track.css("transition", "none");
        }

        $track.css("transform", `translateX(-${currentIndex * 100}%)`);

        // Update active pagination dot based on real index
        let activeDotIndex = currentIndex - 1;
        if (activeDotIndex >= originalCount) activeDotIndex = 0;
        if (activeDotIndex < 0) activeDotIndex = originalCount - 1;

        $dots.removeClass("active").eq(activeDotIndex).addClass("active");
    }

    // 4. Instant position resetting after clone transitions
    $track.on("transitionend webkitTransitionEnd oTransitionEnd", function () {
        isTransitioning = false;

        if (currentIndex === originalCount + 1) {
            // Reached the cloned first slide -> snap instantly to real slide 1
            goToSlide(1, false);
        } else if (currentIndex === 0) {
            // Reached the cloned last slide -> snap instantly to real last slide
            goToSlide(originalCount, false);
        }
    });

    // 5. Auto-play logic (every 4 seconds)
    function startAutoSlide() {
        stopAutoSlide();
        slideInterval = setInterval(function () {
            goToSlide(currentIndex + 1);
        }, 4000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    startAutoSlide();

    // Pause on hover
    $(".testimonial-slider-wrapper").hover(stopAutoSlide, startAutoSlide);

    // 6. Navigation Controls
    $(".prev-btn").on("click", function () {
        goToSlide(currentIndex - 1);
    });

    $(".next-btn").on("click", function () {
        goToSlide(currentIndex + 1);
    });

    $dotsContainer.on("click", ".dot", function () {
        const targetIndex = $(this).data("index");
        goToSlide(targetIndex + 1); // Offset +1 to account for the leading clone
    });


    // ===================================================================
    // Pricing Page Cards
    // Click "Annually"
    $('#btnAnnually').on('click', function () {
        $('#btnMonthly').removeClass('active');
        $(this).addClass('active');
        $('#discountChip').addClass('active-green');

        // Starter Updates
        $('#starterPrice').text('$82/mo');
        $('#starterBilled').text('$990 billed annually');
        $('#starterAttempts').text('60 attempts per year');

        // Pro Updates
        $('#proPrice').text('$375/mo');
        $('#proBilled').text('$4,490 billed annually');
        $('#proAttempts').text('300 attempts per year');
    });

    // Click "Monthly"
    $('#btnMonthly').on('click', function () {
        $('#btnAnnually').removeClass('active');
        $(this).addClass('active');
        $('#discountChip').removeClass('active-green');

        // Starter Updates
        $('#starterPrice').text('$99');
        $('#starterBilled').text('Per month');
        $('#starterAttempts').text('5 attempts per month');

        // Pro Updates
        $('#proPrice').text('$449');
        $('#proBilled').text('Per month');
        $('#proAttempts').text('25 attempts per month');
    });


    // ================================================

    // Listen for clicks on the FAQ header area
    $('.faq-header').on('click', function () {
        var $currentCard = $(this).closest('.faq-card');
        var $currentBody = $currentCard.find('.faq-body');

        // Slide up all other open answers and reset their active state
        $('.faq-card').not($currentCard).removeClass('active')
            .find('.faq-body').slideUp(300);

        // Toggle the visibility of the clicked answer smoothly
        $currentBody.slideToggle(300, function () {
            // Toggle the class to trigger CSS animation on icon rotation and border
            $currentCard.toggleClass('active', $currentBody.is(':visible'));
        });
    });


    // ================================================


});