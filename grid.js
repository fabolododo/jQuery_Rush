(function ($) {
    $.fn.gridBuild = function () {
        for (var rows = 0; rows < 4; rows++) {

            for (var columns = 0; columns < 4; columns++) {
                $("#grid-container").append('<div class ="grid" id="' + rows + '-' + columns + '"></div>');
            };

        };
        $(".grid").width(100);
        $(".grid").height(100);
    }

    $.fn.initTile = function () {
        let x = Math.round(Math.random() * 3);
        let y = Math.round(Math.random() * 3);
        let empty = false;
        while (empty == false) {
            console.log($("#" + x + "-" + y).text());
            console.log(x, y);
            if ($("#" + x + "-" + y).text() == "")
                empty = true;
            else {
                x = Math.round(Math.random() * 3);
                y = Math.round(Math.random() * 3);
            }
        }
        $("#" + x + "-" + y).html(Math.random() < 0.9 ? 2 : 4);

    }

    $.fn.moveLeft = function () {
        for (x = 0; x < 3; x++) {
            for (y = 0; y < 3; y++) {
                if ($("#" + x + "-" + y).text() != "") {
                    $("#" + x + "-" + y).animate({
                        position: "absolute",
                        right: "100px"
                    });
                }
            }
        }
    }

})(jQuery);