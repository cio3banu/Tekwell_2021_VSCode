$(document).ready(() => {
    $(".container .row .col:nth-child(odd)").css({
        "background": "blue"
    });
    const row = $(".container .row");
    for (let index = 0; index < 10; index++) {
        row.clone().appendTo(".container");
    }

    $("button").on("click", function(){
        $(this).css({
            "background": "blue"
        });
    });
});