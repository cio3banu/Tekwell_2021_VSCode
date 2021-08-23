$(document).ready(() => {
    $("body").css({
        "background": "red"
    });

    $("#element").css({
        "background": "blue"
    });

    $("#element").on("click", () => {
        $("#element").css({
            "background": "green"
        });
    })

    $("ul.elements li").css({
        "background": "yellow"
    });
});