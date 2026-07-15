$(document).ready(function () {

    // ==========================================
    // DYNAMIC NAVBAR OFFSET FOR SCROLLING
    // ==========================================
    function setScrollOffset() {
        // Find your sticky-top element
        const $navbar = $('.sticky-top');

        if ($navbar.length) {
            // Get height + 10px buffer
            const offset = $navbar.outerHeight() + 10;

            // Set the CSS variable on the root
            document.documentElement.style.setProperty('--scroll-offset', offset + 'px');
        }
    }

    // Run on load
    setScrollOffset();

    // Run whenever the window is resized (in case navbar height changes)
    $(window).on('resize', setScrollOffset);


    // ==========================================
    // Hero Img 3D Hover JS
    // ==========================================

    const $heroImg = $('.hero-img');
    const maxTiltAngle = 10; // Higher numbers make the tilt sharper

    if ($heroImg.length) {
        // Enforce 3D rendering setup via jQuery
        $heroImg.css('transform-style', 'preserve-3d');

        $heroImg.on('mousemove', function (e) {
            // Get dimensions and page offsets of the image wrapper
            const width = $(this).outerWidth();
            const height = $(this).outerHeight();
            const offset = $(this).offset();

            // Calculate cursor location relative to image element (-0.5 to 0.5)
            const xPercent = (e.pageX - offset.left) / width - 0.5;
            const yPercent = (e.pageY - offset.top) / height - 0.5;

            // Inverting Y pushes the targeted quadrant backwards
            const rotateX = -yPercent * maxTiltAngle;
            const rotateY = xPercent * maxTiltAngle;

            // Apply calculated styles
            $(this).css('transform', `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
        });

        // Reset the image plane cleanly when mouse exits bounding box
        $heroImg.on('mouseleave', function () {
            $(this).css('transform', 'rotateX(0deg) rotateY(0deg)');
        });
    }


    // Mobile Dropdown Navigation JS

    const $mobileNav = $('#mobileNav');
    const $openMenuIcon = $('#openMenuIcon');

    if ($openMenuIcon.length && $mobileNav.length) {

        // Toggle the dropdown on menu icon click
        $openMenuIcon.on('click', function () {
            $mobileNav.slideToggle(300); // 300ms smooth drop animation
        });

        // Close the dropdown implicitly if links inside are selected
        $('.mobile-links a').on('click', function () {
            $mobileNav.slideUp(300);
        });
    }



    // Projects Filtering & Pagination

    const itemsPerPage = 4;
    let currentCategory = 'all';

    function renderProjects() {
        let visibleCount = 0;
        let totalInCategory = 0;

        $('.project-item').each(function () {
            const itemCategory = $(this).data('category');

            if (currentCategory === 'all' || itemCategory === currentCategory) {
                totalInCategory++;

                if (visibleCount < itemsPerPage) {
                    $(this).fadeIn(300);
                    visibleCount++;
                } else {
                    $(this).hide();
                }
            } else {
                $(this).hide();
            }
        });

        if (totalInCategory > itemsPerPage) {
            $('#loadMoreBtn').fadeIn();
        } else {
            $('#loadMoreBtn').fadeOut();
        }
    }

    renderProjects();

    $('.filter-btn').on('click', function () {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        currentCategory = $(this).data('filter');

        $('.project-item').hide();
        renderProjects();
    });

    $('#loadMoreBtn').on('click', function () {
        let hiddenItems = $(`.project-item:hidden`).filter(function () {
            const cat = $(this).data('category');
            return currentCategory === 'all' || cat === currentCategory;
        });

        hiddenItems.fadeIn(300);
        $(this).fadeOut();
    });


    // ==================================================================================
    // Click to Expand Modal & Build Carousel

    // const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));

    // $('.compact-card-new').on('click', function () {

    //     // Populate text data
    //     $('#modalTitle').text($(this).data('title'));
    //     $('#modalTech').text($(this).data('tech'));
    //     $('#modalFullDesc').text($(this).data('full'));

    //     // Extract JSON array of images from data attribute
    //     const images = $(this).data('images');

    //     let carouselInnerHtml = '';
    //     let carouselIndicatorsHtml = '';

    //     // Build Slider HTML dynamically
    //     if (images && images.length > 0) {
    //         images.forEach((imgUrl, index) => {
    //             const activeClass = index === 0 ? 'active' : '';

    //             // Add Image Slide
    //             carouselInnerHtml += `
    //         <div class="carousel-item ${activeClass}">
    //         <img src="${imgUrl}" class="d-block w-100 modal-carousel-img" alt="Project Screen ${index + 1}">
    //         </div>
    //         `;

    //             // Add Indicator Buttons
    //             carouselIndicatorsHtml += `
    //         <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="${index}" class="${activeClass}" aria-label="Slide ${index + 1}"></button>
    //         `;
    //         });

    //         $('#projectCarousel').show(); // Show carousel if images exist
    //     } else {
    //         $('#projectCarousel').hide(); // Hide if no images
    //     }

    //     // Inject built HTML into the DOM
    //     $('#carouselInner').html(carouselInnerHtml);
    //     $('#carouselIndicators').html(carouselIndicatorsHtml);

    //     // Open modal
    //     projectModal.show();
    // });



    // ==========================================
    // DYNAMIC PROJECT PREVIEW LOGIC
    // ==========================================
    $(document).on('click', '.compact-card-new', function () {
        const $card = $(this);

        // 1. Gather Project Configuration
        const title = $card.data('title');
        const tech = $card.data('tech');
        const desc = $card.data('full');
        const layout = $card.data('layout') || 'landscape'; // fallback to landscape
        const sourceUrl = $card.data('source');
        const liveUrl = $card.data('live');
        const images = $card.data('images');

        // 2. Set Sizing Classes on Modal Wrapper
        const $dialog = $('#modalDialogWrapper');
        $dialog.removeClass('modal-portrait modal-landscape');

        if (layout === 'portrait') {
            $dialog.addClass('modal-portrait');
        } else {
            $dialog.addClass('modal-landscape');
        }

        // 3. Inject Descriptive Text fields
        $('#modalTitle').text(title);
        $('#modalTech').text(tech);
        $('#modalFullDesc').text(desc);

        // 4. Update Dynamic External Links (Hide button if URL isn't set)
        const $sourceBtn = $('#modalSourceBtn');
        const $liveBtn = $('#modalLiveBtn');

        if (sourceUrl && sourceUrl.trim() !== "") {
            $sourceBtn.attr('href', sourceUrl).attr('target', '_blank').show();
        } else {
            $sourceBtn.hide();
        }

        if (liveUrl && liveUrl.trim() !== "") {
            $liveBtn.attr('href', liveUrl).attr('target', '_blank').show();
        } else {
            $liveBtn.hide();
        }

        // 5. Generate Carousel Indicators and Elements
        let carouselInnerHtml = '';
        let carouselIndicatorsHtml = '';

        if (images && images.length > 0) {
            images.forEach((imgUrl, index) => {
                const activeClass = index === 0 ? 'active' : '';
                carouselInnerHtml += `
                    <div class="carousel-item ${activeClass}">
                        <img src="${imgUrl}" class="d-block w-100" alt="${title} Screen ${index + 1}">
                    </div>
                `;
                carouselIndicatorsHtml += `
                    <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="${index}" class="${activeClass}" aria-label="Slide ${index + 1}"></button>
                `;
            });
            $('#projectCarousel').show();
        } else {
            $('#projectCarousel').hide();
        }

        $('#carouselInner').html(carouselInnerHtml);
        $('#carouselIndicators').html(carouselIndicatorsHtml);

        // 6. Launch Project Modal window
        const projectModalInstance = new bootstrap.Modal(document.getElementById('projectModal'));
        projectModalInstance.show();
    });
    // ==================================================================================


    /* ================================================================================= */
    /* TYPEWRITER EFFECT */

    const phrases = [
        "Turning Ideas into Products.",
        "Keeping it simple."
    ];

    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeWriter() {
        const typewriterElement = document.getElementById('typewriter-text');
        if (!typewriterElement) return;

        const currentPhrase = phrases[currentPhraseIndex];

        // Handle deleting vs typing
        if (isDeleting) {
            typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            typingSpeed = 50; // Deletes faster
        } else {
            typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            typingSpeed = 100; // Normal typing speed
        }

        // Logic for pausing, deleting, and switching phrases
        if (!isDeleting && currentCharIndex === currentPhrase.length) {
            typingSpeed = 2000; // Pause for 2 seconds at the end of the phrase
            isDeleting = true;
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Loop to the next phrase
            typingSpeed = 500; // Pause for half a second before typing the new phrase
        }

        setTimeout(typeWriter, typingSpeed);
    }

    typeWriter();



    // ==========================================
    // BACK TO TOP BUTTON LOGIC
    // ==========================================
    const $backToTopBtn = $('#backToTopBtn');

    // Explicitly hide it on load
    $backToTopBtn.hide();

    // Show or hide the button based on scroll position (300px from top)
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $backToTopBtn.fadeIn(300);
        } else {
            $backToTopBtn.fadeOut(300);
        }
    });

    // Scroll to top smoothly on click
    $backToTopBtn.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false; // Prevent default anchor click behavior
    });



});