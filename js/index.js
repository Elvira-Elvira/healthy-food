$(document).ready(function(){
    
    $(".mainButtonChose").click(function() { 

        $('html, body').animate({
        scrollTop: $(".secondscreen").offset().top 
        }, 370); 
        event.preventDefault();
        event.stopPropagation();
       });

       $("#order").click(function() { 

        $('html, body').animate({
        scrollTop: $(".thirdscreen").offset().top 
        }, 370); 
        event.preventDefault();
        event.stopPropagation();
       });

});