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
                        while (yTemp >=0 && $("#" + x + "-" + yTemp).text() == ""){
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
                        while (yTemp <=3 && $("#" + x + "-" + yTemp).text() == ""){
                            yTemp++;
                        }
                        yTemp--;
                        if ($("#" + x + "-" + yTemp).text() == "") {
                            let valueSource = $("#" + x + "-" + y).text();
                            let valueTarget = $("#" + x + "-" + yTemp).text();
                            valueTarget = $("#" + x + "-" + yTemp ).text(valueSource);
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
                for (x = 3; x >= 0; x--) {
                    if ($("#" + x + "-" + y).text() != "") {
                        let xTemp = x + 1;
                        while(xTemp <= 3 && $("#" + xTemp + "-" +y).text() == ""){
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

        function mergeUp(){
            for (y = 0; y <= 3; y++){
                for (x = 0; x <= 3; x++){
                    let value1 = $("#" + x + "-" + y).text();
                    console.log(value1);
                    let value2 = $("#"+(x+1)+"-" + y).text();
                    console.log(value2);
                    if (value1 && value1 == value2){
                        let newValue1 = value1 * 2;
                        $("#"+ x +"-" + y).text(newValue1);
                        $("#"+(x+1)+"-" + y).text("");
                    }
                }
            }
        }
        document.addEventListener("keydown", logKey);

        function logKey(key) {
            let keyPress = key.keyCode;
            console.log(keyPress);
            if (keyPress === 37) {
                moveLeft();
                // initTile();
            } else if (keyPress === 39) {
                moveRight();
                // initTile();
            } else if (keyPress === 38) {
                mergeUp();
                moveUp();
                // initTile();
            }
            else if (keyPress === 40){
                moveDown();
                // initTile();
            }
        }

        gridBuild();
        // initTile();
        // initTile();
        $("#0-1").text(2);
        $("#1-2").text(2);
        $("#2-1").text(2);
        $("#3-2").text(2);


    }
})(jQuery);