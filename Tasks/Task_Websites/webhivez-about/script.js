$(document).ready(function () {

    // Navbar BG Scroll Tracker Activation
    const $navbar = $('#main-nav');
    $(window).on('scroll', function () {
        $navbar.toggleClass('nav-scrolled', $(this).scrollTop() > 50);
    }).trigger('scroll');

    // Animated Statistical Numbers Logic
    let statsAnimated = false;
    const $statsSection = $('.stats-section');

    if ($statsSection.length > 0) {
        $(window).on('scroll', handleStatsScroll);
        handleStatsScroll();
    }

    function handleStatsScroll() {
        if (statsAnimated) return;

        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        const sectionTop = $statsSection.offset().top;
        const sectionHeight = $statsSection.outerHeight();
        const triggerPoint = sectionTop + (sectionHeight * 0.3);

        if (scrollTop + windowHeight >= triggerPoint) {
            statsAnimated = true;
            animateNumbers();
            $(window).off('scroll', handleStatsScroll);
        }
    }

    function animateNumbers() {
        $('.stat-number').each(function () {
            const $this = $(this);
            const targetValue = parseInt($this.attr('data-target'), 10);

            $({ countVal: 0 }).animate({ countVal: targetValue }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countVal));
                },
                complete: function () {
                    $this.text(targetValue);
                }
            });
        });
    }

    // Mission Carousel Loop & Tab Switch System
    let currentMissionIdx = 0;
    const totalMissions = $('.mission-tab-card').length;
    let missionAutoCycleTimer;

    function transitionToMission(index) {
        currentMissionIdx = index;

        $('.mission-tab-card').removeClass('active');
        $(`.mission-tab-card[data-mission="${index}"]`).addClass('active');

        $('.mission-content-pane').addClass('d-none').removeClass('active');
        $(`.mission-content-pane[data-mission="${index}"]`).removeClass('d-none').addClass('active');
    }

    function initMissionLoop() {
        missionAutoCycleTimer = setInterval(function () {
            let nextIdx = (currentMissionIdx + 1) % totalMissions;
            transitionToMission(nextIdx);
        }, 3000);
    }

    $('.mission-tab-card').on('click', function () {
        clearInterval(missionAutoCycleTimer);
        const targetedIdx = parseInt($(this).attr('data-mission'), 10);

        transitionToMission(targetedIdx);
        initMissionLoop();
    });

    if (totalMissions > 0) {
        initMissionLoop();
    }
});