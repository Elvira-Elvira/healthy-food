$(../html/index.html).ready(function(){
    $(mainButtonChose).on("click", function () {
        let href = $(this)("href");

        $("html, body").animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 370,
            easing: "linear"
        });

        return false;
    });
});