$(document).ready(function () {
    // 1. Scroll Animations
    function revealElements() {
        var windowHeight = $(window).height();
        var scrollPos = $(window).scrollTop();
        $('.reveal').each(function () {
            var elementOffset = $(this).offset().top;
            if (scrollPos > (elementOffset - windowHeight + 100)) {
                $(this).addClass('active');
            }
        });
    }
    revealElements();
    $(window).scroll(revealElements);

    // 2. Navbar Styling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // 3. Estimator Selection
    $('.est-pill').on('click', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('#estimator-result').slideUp(200);
    });

    // 4. Estimator Calculation
    $('#btn-calculate').on('click', function () {
        const stage = $('#est-stage .active').attr('data-val');
        const focus = $('#est-focus .active').attr('data-val');

        let stackHTML = '';
        let timeEst = '';

        if (focus === 'fullstack') {
            stackHTML = '<li>React / Next.js</li><li>Node.js</li><li>PostgreSQL</li>';
        } else if (focus === 'api') {
            stackHTML = '<li>Python</li><li>Redis</li><li>AWS</li>';
        } else if (focus === 'ai') {
            stackHTML = '<li>Python</li><li>OpenAI API</li><li>Vector Database</li>';
        }

        if (stage === 'mvp') timeEst = '4 - 8 Weeks';
        if (stage === 'scale') timeEst = '2 - 4 Months';
        if (stage === 'enterprise') timeEst = '4+ Months';

        $('#est-stack-list').html(stackHTML);
        $('#est-time').text(timeEst);
        $('#estimator-result').slideDown(400);
    });

    // 5. Portfolio Filtering
    $('#portfolio-filters .est-pill').on('click', function () {
        const filterValue = $(this).attr('data-filter');
        if (filterValue === 'all') {
            $('.portfolio-item').fadeIn(300);
        } else {
            $('.portfolio-item').hide();
            $('.portfolio-item.' + filterValue).fadeIn(300);
        }
    });
});