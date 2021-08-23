$(document).ready(() => {
    $(document).keydown(function(e) {
        
        switch(e.keyCode){
            case 37: 
                $("#ball").animate({
                    "left": ($("#ball").position().left - 20) + "px"
                }, 100);
                break;
            case 38: 
                $("#ball").animate({
                    "top": ($("#ball").position().top - 20) + "px"
                }, 100);
                break;

            case 39: 
                $("#ball").animate({
                    "left": ($("#ball").position().left + 20) + "px"
                }, 100);
                break;

            case 40: 
                $("#ball").animate({
                    "top": ($("#ball").position().top + 20) + "px"
                }, 100);
                break;
        }
    });

    $("#ball").click(function() {
        $(this).animate({
            "width": "60px",
            "height": "60px",
        });
        $(this).fadeOut();
    });
});