(function ($) {
    $.fn.rotate = function (timer) {
        var itimer = 5000;
        if (timer == null)
            timer = 5000;
        var container = $(this);
        var totale = container.find("div").size();
        var current = 0;
        var i = setInterval(function () {
            if (current >= totale) current = 0;
            container.find("div").filter(":eq(" + current + ")").fadeIn("slow").end().not(":eq(" + current + ")").fadeOut("slow");
            current++;
        }, timer);
        return container;
    };
})(jQuery);