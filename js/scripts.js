$(document).ready(function() { 

//--------------------Navigation after scroll-------------------//

    var num = 180; //number of pixels before modifying styles

    $(window).bind('scroll', function() {
    	if ($(window).scrollTop() > num) {
            $('header').addClass('fixed');
            $('.brand').addClass('showme');
         } else {
            $('header').removeClass('fixed');
            $('.brand').removeClass('showme');
        }
    });

//--------------------Scroll-------------------//
    $(function() {  
       jQuery.scrollSpeed(200, 800);
    });

//--------------------cookies------------------//

    jQuery.fn.cookiesEU({
        text:               'Nasza strona internetowa używa plików cookies (tzw. ciasteczka) w celach statystycznych oraz funkcjonalnych.',
        close:              'Rozumiem',
        position:           'bottom',
        parent:             jQuery('nav'),
        use_default_css:    false,
        box_css:            'width: 60%; margin: 15px auto; min-height: 40px;',
        inner_css:          'position: relative; background-color: rgba(23, 197, 20, 0.78); color: #ffffff; font-size: 15px; text-align: left; text-align: center; border-radius: 5px; padding: 15px;', 
        text_css:           'color: white; font-family: Lato, sans-serif; font-weight: 300; line-height: 25px; letter-spacing: 1px;',
        // close_css:          'max-width: 200px; margin: 15px auto 0 auto; display: block; background-color: rgba(255, 40, 120, 0.86); color: #ffffff; text-transform: uppercase; letter-spacing: 2px; line-height: 40px; font-family: Lato, sans-serif; text-align: center;', 
    });

});



//--------------------gallery------------------//


    var thumb1 = document.querySelector('#pic1');
    var thumb2 = document.querySelector('#pic2');
    var thumb3 = document.querySelector('#pic3');
    var thumb4 = document.querySelector('#pic4');
    var thumb5 = document.querySelector('#pic5');
    var thumb6 = document.querySelector('#pic6');

        thumb1.addEventListener('click', showPicOne);
        thumb2.addEventListener('click', showPicTwo);
        thumb3.addEventListener('click', showPicThree);
        thumb4.addEventListener('click', showPicFour);
        thumb5.addEventListener('click', showPicFive);
        thumb6.addEventListener('click', showPicSix);


    var bigPicCont = document.getElementById('mainPhotoBox');         
        
        function showPicOne() {
            bigPicCont.className = '';
            bigPicCont.classList.add('main-photo-box');
            bigPicCont.classList.add('main-photo1');
        }   
        function showPicTwo() {
            bigPicCont.className = '';
            bigPicCont.classList.add('main-photo-box');
            bigPicCont.classList.add('main-photo2');
        }   
        function showPicThree() {
            bigPicCont.className = '';
            bigPicCont.classList.add('main-photo-box');
            bigPicCont.classList.add('main-photo3');
        }   
        function showPicFour() {
            bigPicCont.className = '';
            bigPicCont.classList.add('main-photo-box');
            bigPicCont.classList.add('main-photo4');
        }   
        function showPicFive() {
            bigPicCont.className = '';
            bigPicCont.classList.add('main-photo-box');
            bigPicCont.classList.add('main-photo5');
        }   
        function showPicSix() {
            bigPicCont.className = '';
            bigPicCont.classList.add('main-photo-box');
            bigPicCont.classList.add('main-photo6');
        }   




























//
// contact Form SUBMIT
// $(function(){
//     //zmienne formularz i wiadomość
//     var form = $('#ajax-form');
//     var formMessages = $('#form-messages');


//     $(form).submit(function(event) {
//         event.preventDefault();
//     });

//     var formData = $(form).serialize();

//     $.ajax({
//         type: 'POST',
//         url: $(form).attr('action'),
//         data: formData

//     })
//         .done(function(response) {
//             // Make sure that the formMessages div has the 'success' class.
//             $(formMessages).removeClass('error');
//             $(formMessages).addClass('success');

//             // Set the message text.
//             $(formMessages).text(response);

//             // Clear the form.
//             $('#name').val('');
//             $('#email').val('');
//             $('#message').val('');
//         })

//         .fail(function(data) {
//             // Make sure that the formMessages div has the 'error' class.
//             $(formMessages).removeClass('success');
//             $(formMessages).addClass('error');

//             // Set the message text.
//             if (data.responseText !== '') {
//                 $(formMessages).text(data.responseText);
//             } else {
//                 $(formMessages).text('Oops! An error occured and your message could not be sent.');
//             }
//         })
// });

