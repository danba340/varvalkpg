$(function() {
    FastClick.attach(document.body);
});

$(document).ready(function() {
    var numOfRunners = 100;
    var parentDiv = $("#container");
    for(var i = 1; i <= numOfRunners; i++){
        parentDiv.append("<div id='button" + i + "' class='button'>" + i + "<div id='lapsRunnerNo" + i + "' class='lapcount'><span>Varv:</span>0</div></div>");
    }
    $('.button').on("click", function(){
        var noEnlarged = true;
        $('button').each(function(index, button){
            if(button.hasClass("enlarge")){
              noEnlarged = false;
            }
        });
        if(noEnlarged){
          $(this).addClass("enlarge");
        }
        parentDiv.append("<div class='close'>X</div>");
    });
    $('.close').on("click", function(){
        $('.close').find("button"),removeClass("enlarge");
    });
});


