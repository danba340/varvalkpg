$(function() {
    FastClick.attach(document.body);
});

function updateLaps(){
  $('.button').each(function(){

  });
}

$(document).ready(function() {
    var numOfRunners = 100;
    var parentDiv = $("#container");
    for(var i = 1; i <= numOfRunners; i++){
        parentDiv.append("<a href='#top' ><div id='button" + i + "' class='button btn-success' data-runner-no='" + i +"'>Nr: " + i +"<div class='lapcount'><span>Varv: </span>0</div><button class='add btn-default'><div>+</div></button><button class='remove btn-default'><div>-</div></button></div></a>");
    }
    $('.button').click(function(){
        $(this).toggleClass("enlarge");

    });
    $('.add').click(function(){
        $.ajax({
            type:"POST"
            , url:"http://vfv-api.azurewebsites.net/api/lap/addlap?startNumber=" + $(this).parent().data("runnerNo")
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
    $('.remove').click(function(){
        $.ajax({
            type:"POST"
            , url:"http://vfv-api.azurewebsites.net/api/lap/addlap?startNumber=" + $(this).parent().data("runnerNo")
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
    $.ajax({
        type:"GET"
        , url:"http://vfv-api.azurewebsites.net/api/participant/laps?startNumber=1"
        , dataType:"json",
        jsonpCallback: "localJsonCallback",
         success: function(data){
            debugger;

            console.log(data);

        }
       , error: function(e) {
           console.log(e)

           }
    });
    updateLaps();
});


