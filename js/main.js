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
    var buttonID;
    for(var i = 1; i <= numOfRunners; i++){
        parentDiv.append("<a href='#top' ><div id='button" + i + "' class='button btn-success' data-runner-no='" + i +"'>Nr: " + i +"<div class='lapcount'><span>Varv: </span>0</div><button class='add btn-default'><div>+</div></button><button class='remove btn-default'><div>-</div></button></div></a>");
    }
    $('.button').click(function(){
        $(this).toggleClass("enlarge");

    });
    $('.add').click(function(){
        var addButton = $(this);
        $.get("http://vfv-api.azurewebsites.net/api/participant/addlap?startnumber=" + addButton.parent().data("runnerNo"), function(data) {
            var laphtml = "<span>Varv: </span>" + data.count;

            addButton.siblings(".lapcount").html(laphtml)
            console.log(data);

        });

    });
    $('.remove').click(function(){
        var removeButton = $(this);
        $.get("http://vfv-api.azurewebsites.net/api/participant/removelap?startnumber=" + removeButton.parent().data("runnerNo"), function(data) {
            var laphtml = "<span>Varv: </span>" + data.count;

            removeButton.siblings(".lapcount").html(laphtml)
            console.log(data);

        });

    });
    updateLaps();
});


