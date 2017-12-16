$(function () {

    $("ul").on("click","li", function () {
        $(this).toggleClass("completed")
    });

    $("ul").on("click","span",function (event) {
        $(this).parent().fadeOut(function () {
            $(this).remove();
        });

        event.stopPropagation();
    });

    $("input[type='text']").keypress(function (e) {
       
        if (e.which == 13) {
            if ($("input").val()) {
                var todotext = $(this).val();
                $(this).val("")
                $("ul").append("<li> <span> <i class='fa fa-trash'></i> </span>" + todotext + "</li>")
            } 
        }
    });



});