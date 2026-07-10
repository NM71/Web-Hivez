$(document).ready(function () {

    // Hero Heading JS

    // Hero Img JS
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
});
