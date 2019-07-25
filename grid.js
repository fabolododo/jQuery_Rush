(function ($) {
    $.fn.init2048 = function () {
        function gridBuild() {
            for (var rows = 0; rows < 4; rows++) {

                for (var columns = 0; columns < 4; columns++) {
                    $("#grid-container").append('<div class ="grid" id="' + rows + '-' + columns + '"></div>');
                };

            };
            $(".grid").width(100);
            $(".grid").height(100);
        }

        function initTile() {
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

        function moveLeft() {
            for (x = 0; x < 4; x++) {
                for (y = 4; y > 0; y--) {
                    if ($("#" + x + "-" + y).text() != "") {
                        while ($("#" + x + "-" + (y - 1)).text() == "") {
                            let valueSource = $("#" + x + "-" + y).text();
                            let valueTarget = $("#" + x + "-" + (y - 1)).text();
                            valueTarget = $("#" + x + "-" + (y - 1)).text(valueSource);
                            $("#" + x + "-" + y).text("");
                        }
                    }
                }
            }
        }

        function moveRight() {
            for (x = 0; x < 4; x++) {
                for (y = 0; y < 3; y++) {
                    if ($("#" + x + "-" + y).text() != "") {
                        while ($("#" + x + "-" + (y + 1)).text() == "") {
                            let valueSource = $("#" + x + "-" + y).text();
                            let valueTarget = $("#" + x + "-" + (y + 1)).text();
                            valueTarget = $("#" + x + "-" + (y + 1)).text(valueSource);
                            $("#" + x + "-" + y).text("");
                        }
                    }
                }
            }
        }

        function moveUp() {
            for (y = 0; y < 4; y++) {
                for (x = 1; x < 4; x++) {
                    if ($("#" + x + "-" + y).text() != "") {
                        let xTemp =x - 1;
                        while (xTemp >=0 && $("#"+xTemp+"-"+y).text() == "") {
                            xTemp--;
                        }
                        xTemp++;
                        if ($("#"+xTemp+"-"+y).text() == ""){
                            let valueSource = $("#" + x + "-" + y).text();
                            let valueTarget = $("#" + xTemp + "-" + y).text();
                            valueTarget = $("#" + xTemp + "-" + y).text(valueSource);
                            $("#" + x + "-" + y).text("");
                        }
                    }
                }
            }
        }

        function moveDown() {
            for (y = 0; y < 4; y++) {
                for (x = 0; x < 3; x++) {
                    if ($("#" + x + "-" + y).text() != "") {
                        while ($("#" + (x + 1) + "-" + y).text() == "") {
                            valueSource = $("#" + x + "-" + y).text();
                            valueTarget = $("#" + (x + 1) + "-" + y).text();
                            valueTarget = $("#" + (x + 1) + "-" + y).text(valueSource);
                            $("#" + x + "-" + y).text("");
                        }
                    }
                }
            }
        }
        document.addEventListener("keydown", logKey);

        function logKey(key) {
            let keyPress = key.keyCode;
            console.log(keyPress);
            if (keyPress === 37 /* key ===38 || key ===39 || 40*/ ) {
                moveLeft();
                initTile();
            } else if (keyPress === 39) {
                moveRight();
                initTile();
            } else if (keyPress === 38) {
                moveUp();
                initTile();
            }
            else if (keyPress === 40){
                moveDown();
                initTile();
            }
        }

        gridBuild();
        initTile();
        initTile();

    }
})(jQuery);