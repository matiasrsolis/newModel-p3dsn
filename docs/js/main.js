$(document).ready(function() {
     $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $('#isologo').css({"display":"block"});
            $('#logo').css({"display":"none"});
            $('.escudo').css({"display":"none"});
            //$('.headerBox nav').css({"flex-direction":"row"});
        } else {
            $('#isologo').css({"display":"none"});
            $('#logo').css({"display":"block"});
            $('.escudo').css({"display":"block"});
            //$('.headerBox nav').css({"flex-direction":"column-reverse"});
        }
    });

});