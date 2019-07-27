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
        
        var mergeControl;
        var moveControl;
        var score = 0;


        function scorefunction(){
            $("#score").append('<div id="compteurScore"></div>');
            $("#compteurScore").html("<p>Score</p><p>" + score + "</p>");
        }


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
            moveControl = false;
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
                            moveControl = true;
                        }
                    }
                }
            }
        }

        function moveRight() {
            moveControl = false;
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
                            moveControl = true;
                        }
                    }
                }
            }
        }

        function moveUp() {
            moveControl = false;
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
                            moveControl = true;
                        }
                    }
                }
            }
        }

        function moveDown() {
            moveControl = false;
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
                            moveControl = true;
                        }
                    }
                }
            }
        }

        function mergeUp() {
            mergeControl = false;
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
                            score += newValue1;
                            mergeControl = true;
                        }
                    }
                }
            }
        }

        function mergeDown() {
            mergeControl = false;
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
                            score += newValue1;
                            mergeControl = true;
                        }
                    }
                }
            }
        }

        function mergeRight() {
            mergeControl = false;
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
                            score += newValue1;
                            mergeControl = true;
                        }
                    }
                }
            }
        }

        function mergeLeft() {
            mergeControl = false;
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
                            score += newValue1;
                            mergeControl = true;
                        }
                    }
                }
            }
        }

        function gameOver(){
            for (x = 0; x <= 3 ; x++){
                for (y = 0; y <= 3; y++){
                    let xNegatif = x - 1;
                    let xPositif = x + 1;
                    let yNegatif = y - 1;
                    let yPositif = y + 1;
                    let curentCell = $("#" + x + "-" + y).text();
                    let cellTop = $("#" + xNegatif + "-" + y).text();
                    let cellRight = $("#" + x + "-" + yPositif).text();
                    let cellDown = $("#" + xPositif + "-" + y).text();
                    let cellLeft = $("#" + x + "-" + yNegatif).text();

                    if (curentCell){
                        if (xNegatif < 0){
                            cellTop = $("#" + xNegatif + "-" + y).text(42);
                        }
                        if (xPositif > 3){
                            cellDown = $("#" + xPositif + "-" + y).text(42);
                        }
                        if (yNegatif < 0){
                            cellLeft = $("#" + x + "-" + yNegatif).text(42);
                        }
                        if (yPositif > 3){
                            cellRight = $("#" + x + "-" + yPositif).text(42);
                        }

                        if ((cellTop == "" || cellRight == "" || cellDown == "" || cellLeft == "") || (curentCell == cellTop || curentCell == cellRight || curentCell == cellLeft || curentCell == cellDown)){
                            return false;
                        }
                    }
                }

            }
            $("#endGame").text("Game Over");
        }

        function color(){
            for (x = 0; x < 4; x++){
                for (y = 0; y < 4; y++){
                    let number = $("#" + x + "-" + y).text();
                    if(number == ""){
                        $("#" + x + "-" + y).css("background-color", "#ccc0b3");
                    }
                    else if (number == 2)
                        $("#" + x + "-" + y).css("background-color", "#eee4da");
                        else if (number == 4)
                        $("#" + x + "-" + y).css("background-color", "#ede0c8");
                        else if (number == 8)
                        $("#" + x + "-" + y).css("background-color", "#f2b179");
                        else if (number == 16)
                        $("#" + x + "-" + y).css("background-color", "#f59563");
                        else if (number == 32)
                        $("#" + x + "-" + y).css("background-color", "#f67c5f");
                        else if (number == 64)
                        $("#" + x + "-" + y).css("background-color", "#f65e3b");
                        else if (number == 128)
                        $("#" + x + "-" + y).css("background-color", "#edcf72");
                        else if (number == 256)
                        $("#" + x + "-" + y).css("background-color", "#edcc61");
                        else if (number == 512)
                        $("#" + x + "-" + y).css("background-color", "#edc850");
                        else if (number == 1024)
                        $("#" + x + "-" + y).css("background-color", "#edc53f");
                        else if (number == 2048)
                        $("#" + x + "-" + y).css("background-color", "#edc22e");
                        else if (number > 2048)
                        $("#" + x + "-" + y).css("background-color", "#3c3a32");
                }
            }

        }


        document.addEventListener("keydown", logKey);

        function logKey(key) {
            let keyPress = key.keyCode;
            if (keyPress === 37) {
                mergeLeft();
                $("#scoreDiv").text(score);
                moveLeft();
                if (mergeControl == true || moveControl == true){
                    initTile();
                }
                color();
                gameOver();
            }
            else if (keyPress === 39) {
                mergeRight();
                $("#scoreDiv").text(score);
                moveRight();
                if (mergeControl == true || moveControl == true){
                    initTile();
                }
                color();
                gameOver();
            }
            else if (keyPress === 38) {
                mergeUp();
                $("#scoreDiv").text(score);
                moveUp();
                if (mergeControl == true || moveControl == true){
                    initTile();
                }
                color();
                gameOver();
            }
            else if (keyPress === 40) {
                mergeDown();
                $("#scoreDiv").text(score);
                moveDown();
                if (mergeControl == true || moveControl == true){
                    initTile();
                }
                color();
                gameOver();
            }

        }


        gridBuild();
        scorefunction();
        initTile();
        initTile();
        color();

    }
})(jQuery);