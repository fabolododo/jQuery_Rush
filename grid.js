(function ($){
    $.fn.gridBuild = function(){
        for(var rows = 0;rows < 4; rows++){
            for(var columns = 0; columns < 4; columns++){
                $("#grid-container").append('<div class ="grid" id="'+rows+'-'+columns+'">0</div>');
            };
            
        };
        $(".grid").width(550/4);
        $(".grid").height(550/4);
    }
})(jQuery);