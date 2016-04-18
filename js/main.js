$(function() {
    FastClick.attach(document.body);
});

$(document).ready(function() {
    var numOfRunners = 100;
    var parentDiv = $("#container");
    for(var i = 1; i <= numOfRunners; i++){
        parentDiv.append("<div id='button" + i + "' class='button btn-success' data-runner-no='" + i +"'>Nr: " + i +"<div class='lapcount'><span>Varv: </span>0</div><button class='add btn-default'></button></div>");
    }
    $('.button').click(function(){
        $(this).toggleClass("enlarge");

    });
    $('.add').click(function(){

        $.ajax({
            type:"POST"
            , url:"http://vfv-api.azurewebsites.net/api/lap/add?startNumber=" + $(this).parent().data("runnerNo")
            , dataType:"jsonp",
            jsonpCallback: "localJsonpCallback",
             success: function(data){
                debugger;

                console.log(data);

            }
           , error: function(e) {
               console.log(e)

               }
        });

    });

});


