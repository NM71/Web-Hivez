
// * We can also write the following as $(function(){ // All jQuery code here....})

$(document).ready(function () {
    // All jQuery code goes here
    console.log("We are working with jQuery");


    // * There are 3 main types of selectors in jQuery

    // * Element Selector (<p>, <body>, <h1> etc)
    // // Syntax : $('selector').action()

    // // $('p').click(); // automatically click on 'p' tag
    // $('p').click(function () {
    //     console.log('You clicked on <p> tag bro, just wait 3 seconds', this);
    //     // $('p').hide();
    //     $(this).hide();
    //     setTimeout(function () {
    //         console.log('Got you 😁😁😁')
    //     }, 3000)
    // }); // Do this when we click on 'p' tag


    // // $('p').dblclick(function () {
    // //     console.log('You double clicked on <p> tag bro, just wait 3 seconds', this);
    // //     // $('p').hide();
    // //     $(this).hide();
    // //     setTimeout(function () {
    // //         console.log('Got you 😁😁😁')
    // //     }, 3000)
    // // }); // Do this when we click on 'p' tag



    // // * id Selector (#box , #abc)

    // $('#second').click(function () {
    //     $('#second').hide();
    //     console.log("You clicked the 2nd paragraph and it hides now")
    // })
    // // $('#second').mouseenter(function () {
    // //     $('#second').hide();
    // //     console.log("It hides now")
    // // })
    // // $('#second').mouseleave(function () {
    // //     $('#second').show();
    // //     console.log("It shows now")
    // // })

    // // mousedown is click and hold
    // // mouseup is when the mouse button is released
    // $('#second').mousedown(function () {
    //     console.log('Mouse down event triggered')
    // })


    // // * class Selector (.box , .abc)

    // $('.4th').click(function () {
    //     $('.4th').hide();
    //     console.log("You clicked the 4th paragraph and it hides now")
    // })


    // =========================================================================

    // * Events in JS

    // ? Mouse Events = click, dblclick, mouseenter, mouseleave
    // ? Keyboard Events = keypress, keydown, keyup
    // ? Form Events = submit, change, focus, blur
    // ? document/window Events = load, resize, scroll, unload 




    //* =========================================================================
    // Demo of on method
    // On method allow us to handle multiple events at the same time
    // $('p').on(
    //     {
    //         click: function () {
    //             console.log("You Clicked", this);
    //         },
    //         mouseleave: function () {
    //             console.log("Mouse left", this);
    //         }
    //     }
    // )

    // $('.wiki').on(
    //     {
    //         mouseenter: function () {
    //             // $('wiki').hide();
    //             $(this).css('opacity', '0');
    //             console.log('This wiki div is now hidden')
    //         },
    //         mouseleave: function () {
    //             // $('wiki').show();
    //             $(this).css('opacity', '1');

    //             console.log('This wiki div is now displaying')
    //         }
    //     }
    // );

    // for (let i = 0; i < 2; i++) {
    //     $('.wiki').hide(3000, function () {
    //         console.log("Wiki is hidden now")
    //     })

    //     $('.wiki').show(3000, function () {
    //         console.log("Wiki is shown now")
    //     })
    // }


    $('#togBtn').click(function () {

        // $('.wiki').fadeToggle(5000);

        // * Slide Methods - speed and callback parameters are optional
        // * Syntax : $('selector').slideToggle(speed, callback function)
        // $('.wiki').slideToggle(1000, function () {
        //     console.log('slide Toggled');
        // })

        // * Animate Method
        // $('.wiki').animate({
        //     opacity: 0.3,
        //     // height: "40vh",
        //     // width: "40vw"
        // }, 2000)

        // $('.wiki').animate({ opacity: 0.3 }, 2000);
        // $('.wiki').animate({ opacity: 1 }, 2000);
        // $('.wiki').animate({ width: "80vw" }, 2000);
        // $('.wiki').slideUp(2000);
        // $('.wiki').slideDown(2000);
        $('.wiki').text("This is new text")
        console.log($('.wiki').text())

    });





    // $('.wiki').hide(3000, function () {
    //     console.log("Wiki is hidden now")
    // })

    // $('.wiki').show(3000, function () {
    //     console.log("Wiki is shown now")
    // })





});



console.log('I am outside the .ready() so I am printing first')



