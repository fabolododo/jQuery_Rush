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

        // function gameOver(){
        //     for (let x = 0; x < 4; x++){
        //         for (let y = 0; y < 4; y++){
        //             if ($("#" + x + "-" + y).text() != ""){
        //                 alert("GAME OVER");
        //             }
        //         }
        //     }
        // }

        function initTile() {
            let x = Math.round(Math.random() * 3);
            let y = Math.round(Math.random() * 3);
            let empty = false;
            while (empty == false) {
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
                for (y = 0; y < 4; y++) {
                    if ($("#" + x + "-" + y).text() != "") {
                        let yTemp = y - 1;
                        while (yTemp >= 0 && $("#" + x + "-" + yTemp).text() == "") {
                            yTemp--;
                        }
                        yTemp++;
                        if ($("#" + x + "-" + yTemp).text() == "") {
                            let valueSource = $("#" + x + "-" + y).text();
                            let valueTarget = $("#" + x + "-" + yTemp).text();
                            valueTarget = $("#" + x + "-" + yTemp).text(valueSource);
                            $("#" + x + "-" + y).text("");
                        }
                    }
                }
            }
        }

        function moveRight() {
            for (x = 0; x < 4; x++) {
                for (y = 3; y >= 0; y--) {
                    if ($("#" + x + "-" + y).text() != "") {
                        let yTemp = y + 1;
                        while (yTemp <= 3 && $("#" + x + "-" + yTemp).text() == "") {
                            yTemp++;
                        }
                        yTemp--;
                        if ($("#" + x + "-" + yTemp).text() == "") {
                            let valueSource = $("#" + x + "-" + y).text();
                            let valueTarget = $("#" + x + "-" + yTemp).text();
                            valueTarget = $("#" + x + "-" + yTemp).text(valueSource);
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
                        let xTemp = x - 1;
                        while (xTemp >= 0 && $("#" + xTemp + "-" + y).text() == "") {
                            xTemp--;
                        }
                        xTemp++;
                        if ($("#" + xTemp + "-" + y).text() == "") {
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
                for (x = 3; x >= 0; x--) {
                    if ($("#" + x + "-" + y).text() != "") {
                        let xTemp = x + 1;
                        while (xTemp <= 3 && $("#" + xTemp + "-" + y).text() == "") {
                            xTemp++;
                        }
                        xTemp--;
                        if ($("#" + xTemp + "-" + y).text() == "") {
                            let valueSource = $("#" + x + "-" + y).text();
                            let valueTarget = $("#" + xTemp + "-" + y).text();
                            valueTarget = $("#" + xTemp + "-" + y).text(valueSource);
                            $("#" + x + "-" + y).text("");
                        }
                    }
                }
            }
        }

        function mergeUp() {
            for (y = 0; y <= 3; y++) {
                for (x = 0; x <= 3; x++) {
                    let value1 = $("#" + x + "-" + y).text();
                    if (value1 != "") {
                        let xTemp = x + 1;
                        var value2;
                        while ((value2 = $("#" + xTemp + "-" + y).text()) == "" && xTemp <= 3) {
                            xTemp++;
                        }
                        if (value1 && value1 == value2) {
                            let newValue1 = value1 * 2;
                            $("#" + x + "-" + y).text(newValue1);
                            $("#" + xTemp + "-" + y).text("");
                        }
                    }
                }
            }
        }

        function mergeDown() {
            for (y = 0; y <= 3; y++){
                for (x = 3; x >= 0; x--){
                    let value1 = $("#" + x + "-" + y).text();
                    if (value1 != ""){
                        let xTemp = x - 1;
                        var value2;
                        while ((value2 = $("#" + xTemp + "-" + y).text()) == "" && xTemp >= 0) {
                            xTemp--;
                        }
                        if (value1 && value1 == value2){
                            let newValue1 = value1 * 2;
                            $("#" + x + "-" + y).text(newValue1);
                            $("#" + xTemp + "-" + y).text("");
                        }
                    }
                }
            }
        }

        function mergeRight() {
            for (x = 0; x <= 3; x++){
                for (y = 3; y >= 0; y--){
                    let value1 = $("#"+ x + "-" + y).text();
                    if (value1 != ""){
                        let yTemp = y - 1;
                        var value2;
                        while ((value2 = $("#" + x + "-" + yTemp).text()) == "" && yTemp >= 0){
                            yTemp--;
                        }
                        if (value1 && value1 == value2){
                            let newValue1 = value1 * 2;
                            $("#" + x + "-" + y).text(newValue1);
                            $("#" + x + "-" + yTemp).text("");
                        }
                    }
                }
            }
        }

        function mergeLeft() {
            for (x = 0; x <= 3; x++){
                for (y = 0; y <= 3; y++){
                    let value1 = $("#"+ x + "-" + y).text();
                    if (value1 != ""){
                        let yTemp = y + 1;
                        var value2;
                        while ((value2 = $("#" + x + "-" + yTemp).text()) == "" && yTemp <= 3){
                            yTemp++;
                        }
                        if (value1 && value1 == value2){
                            let newValue1 = value1 * 2;
                            $("#" + x + "-" + y).text(newValue1);
                            $("#" + x + "-" + yTemp).text("");
                        }
                    }
                }
            }
        }
        document.addEventListener("keydown", logKey);

        function logKey(key) {
            let keyPress = key.keyCode;
            console.log(keyPress);
            if (keyPress === 37) {
                mergeLeft();
                moveLeft();
                initTile();
            } else if (keyPress === 39) {
                mergeRight();
                moveRight();
                initTile();
            } else if (keyPress === 38) {
                mergeUp();
                moveUp();
                initTile();
            } else if (keyPress === 40) {
                mergeDown();
                moveDown();
                initTile();
            }
        }

        gridBuild();
        initTile();
        initTile();

    }
})(jQuery);