$(document).ready(function () {


    // Custom Cursor
    const $dot = $('.custom-cursor-dot');
    const $ring = $('.custom-cursor-ring');

    let mouseX = 0, mouseY = 0;     // Real mouse positions
    let ringX = 0, ringY = 0;       // Delayed ring positions

    // Ensure custom cursors reveal themselves only once the mouse initializes motion inside viewport
    $(document).on('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        $dot.css({
            top: mouseY + 'px',
            left: mouseX + 'px',
            opacity: 1
        });
        $ring.css('opacity', 1);
    });

    // Create interpolation frame ticks to generate an elegant trailing lag effect
    function renderCursorPhysics() {
        // Easing multiplier equation (0.15 gives a premium fluid drift lag)
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        $ring.css({
            top: ringY + 'px',
            left: ringX + 'px'
        });

        requestAnimationFrame(renderCursorPhysics);
    }
    // Start loop animation tick
    requestAnimationFrame(renderCursorPhysics);

    // Apply interactive hover feedback targets across all your clickable UI frames
    const hoverTargets = 'a, button, .accordion-button, .value-card, .commitment-item, .mission-row-item, .stat-card';

    $(document).on('mouseenter', hoverTargets, function () {
        $ring.addClass('custom-cursor-active');
        $dot.addClass('custom-cursor-active');
    });

    $(document).on('mouseleave', hoverTargets, function () {
        $ring.removeClass('custom-cursor-active');
        $dot.removeClass('custom-cursor-active');
    });

    // Fade out cursor when mouse leaves the browser frame boundary
    $(document).on('mouseleave', function () {
        $dot.css('opacity', 0);
        $ring.css('opacity', 0);
    });


    // Navbar BG Logic JS
    // const $navbar = $('#main-nav');

    // $(window).on('scroll', function () {
    //     // Checks if user scrolled down more than 50px
    //     const isScrolled = $(this).scrollTop() > 50;

    //     // Toggles the class automatically based on the true/false statement
    //     $navbar.toggleClass('nav-scrolled', isScrolled);
    // });

    $(document).ready(function () {
        const $navbar = $('#main-nav');

        $(window).on('scroll', function () {
            $navbar.toggleClass('nav-scrolled', $(this).scrollTop() > 50);
        }).trigger('scroll'); // Triggers the check immediately on page load
    });


    // Animated Stats JS
    let statsAnimated = false;
    const $statsSection = $('.stats-section');

    // Return early if the stats section doesn't exist on the current page
    if ($statsSection.length === 0) return;

    function handleStatsScroll() {
        if (statsAnimated) return;

        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        const sectionTop = $statsSection.offset().top;
        const sectionHeight = $statsSection.outerHeight();

        // Trigger logic: calculates when exactly 30% of the section has crossed into the viewport
        const triggerPoint = sectionTop + (sectionHeight * 0.3);

        if (scrollTop + windowHeight >= triggerPoint) {
            statsAnimated = true;
            animateNumbers();
            // Kill listener immediately once triggered to save browser resources
            $(window).off('scroll', handleStatsScroll);
        }
    }

    function animateNumbers() {
        $('.stat-number').each(function () {
            const $this = $(this);
            const targetValue = parseInt($this.attr('data-target'), 10);

            $({ countVal: 0 }).animate({ countVal: targetValue }, {
                duration: 2000, // Smooth 2 seconds build-up
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countVal));
                },
                complete: function () {
                    $this.text(targetValue); // Snap to exact target integer at complete
                }
            });
        });
    }

    // Bind scroll handler and execute once instantly on mount in case section is already viewable
    $(window).on('scroll', handleStatsScroll);
    handleStatsScroll();
});