var bar = $("#bar");
var topImage = $("#top-image");
var containerOffset = $("#container").offset().left;

$("#bar").on("mousedown", function() {
    $("#container").on("mousemove", function(event) {
        bar.css({
            left: event.clientX - containerOffset
        });
        topImage.css({
            width: event.clientX - containerOffset
        });

        $(document).mouseup(function() {
            $("#container").off("mousemove");

            bar.css({
                left: 300 + "px"
            });
            topImage.css({
                width: 294 + "px"
            });
        });
    });
});
