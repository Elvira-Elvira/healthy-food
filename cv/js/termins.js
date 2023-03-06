$(document).ready(function () {

        $('.nav a[href^="#]').click(function () {
            var offset = $('.nav').innerHeight();
            var target = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(target).offset().top - offset
            }, 500);
            $('.nav a[href^="#"]').removeClass('active');
            $(this).addClass('active');
            return false;
        });
});