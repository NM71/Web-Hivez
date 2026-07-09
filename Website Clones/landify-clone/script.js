$(document).ready(function () {

    // back to top
    const backToTop = $("#backToTop");

    $(window).on("scroll", function () {

        if ($(window).scrollTop() > $("#home").outerHeight()) {
            backToTop.addClass("show");
        } else {
            backToTop.removeClass("show");
        }

    });

    backToTop.on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });

    // navbar mobile toggle JS
    $('.mobile-nav-toggle').click(function () {
        $('.nav-links').toggleClass('show');

        // toggle icon change
        $(this).toggleClass("bi-list bi-x");
    });


    // Carousel JS
    var speed = 5000;

    setInterval(function () {
        var slideWidth = $('.slide').outerWidth();

        $('.slider-track').animate({
            marginLeft: -slideWidth
        }, 500, function () {
            $(this).find('.slide:first').appendTo(this);
            $(this).css('margin-left', 0);
        });

    }, speed);
    // ==========================================================

    // Features JS
    $('.nav-tab').on('click', function () {
        $('.nav-tab').removeClass('active');
        $(this).addClass('active');

        var title = $(this).data('title');
        var desc = $(this).data('desc');
        var iconClass = $(this).data('icon');
        var imgUrl = $(this).data('img');

        var stat1Num = $(this).data('stat1-num');
        var stat1Label = $(this).data('stat1-label');
        var stat2Num = $(this).data('stat2-num');
        var stat2Label = $(this).data('stat2-label');
        var stat3Num = $(this).data('stat3-num');
        var stat3Label = $(this).data('stat3-label');

        var cardText = $(this).data('badge-text');
        var cardVal = $(this).data('badge-val');
        var cardIcon = $(this).data('badge-icon');

        // 3. Smooth fade transition for the content swap
        $('.tab-data, .tab-visuals').fadeOut(200, function () {
            // Updating text data
            $('#dynamic-title').text(title);
            $('#dynamic-desc').text(desc);

            // Update Top Left Icon Badge
            $('#dynamic-badge-icon').attr('class', 'bi ' + iconClass);

            // Update Stats
            $('#dynamic-stat1-num').text(stat1Num);
            $('#dynamic-stat1-label').text(stat1Label);
            $('#dynamic-stat2-num').text(stat2Num);
            $('#dynamic-stat2-label').text(stat2Label);
            $('#dynamic-stat3-num').text(stat3Num);
            $('#dynamic-stat3-label').text(stat3Label);

            // Update Visuals & Floating Card
            $('#dynamic-img').attr('src', imgUrl);
            $('#dynamic-card-icon').attr('class', 'bi ' + cardIcon);
            $('#dynamic-card-text').text(cardText);
            $('#dynamic-card-val').text(cardVal);

            // Fade components back in
            $('.tab-data, .tab-visuals').fadeIn();
        });
    });

    // ==========================================================

    // Stats JS
    let statsAnimated = false;

    function animateStats() {
        $('.testimonial-stats-grid .stat-number span').each(function () {
            const $this = $(this);
            const target = parseInt($this.text(), 10);

            $this.text('0'); // reset starting point visually

            $({ count: 0 }).animate(
                { count: target },
                {
                    duration: 2500,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.count));
                    },
                    complete: function () {
                        $this.text(target);
                    }
                }
            );
        });
    }

    const statsSection = document.querySelector('.testimonial-stats-grid');

    if (statsSection) {
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting && !statsAnimated) {
                        statsAnimated = true;
                        animateStats();
                        observer.unobserve(statsSection); // only trigger once
                    }
                });
            },
            {
                threshold: 0.3
            }
        );

        observer.observe(statsSection);
    }
    // ==========================================================



    // ==========================================================

    // Pricing JS
    // Toggle billing period on switch change
    $('#billingToggle').on('change', function () {
        const isYearly = $(this).is(':checked');

        // Update active label styling
        $('#labelMonthly').toggleClass('active', !isYearly);
        $('#labelYearly').toggleClass('active', isYearly);

        // Update each price with a quick fade for a smooth feel
        $('.amount').each(function () {
            const $el = $(this);
            const price = isYearly ? $el.data('yearly') : $el.data('monthly');
            $el.fadeTo(100, 0, function () {
                $el.text(price).fadeTo(150, 1);
            });
        });

        // Yearly is priced per month equivalent, so keep "/mo" but could switch to "/yr"
        $('.period').text(isYearly ? '/yr' : '/mo');
    });

    // Clicking the text labels also toggles the switch
    $('#labelMonthly').on('click', function () {
        $('#billingToggle').prop('checked', false).trigger('change');
    });
    $('#labelYearly').on('click', function () {
        $('#billingToggle').prop('checked', true).trigger('change');
    });


    // ==========================================================

});



