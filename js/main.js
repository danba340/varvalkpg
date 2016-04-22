$(function() {
    FastClick.attach(document.body);
});

function buttonsLoaded(){
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
            var laphtml = "<span>Varv: </span>" + String(data.count - 1);

            removeButton.siblings(".lapcount").html(laphtml)
            console.log(data);

        });

    });
}

$(document).ready(function() {
    $.get("http://vfv-api.azurewebsites.net/api/lap/getparticipantslapcount", function(data) {
        $.each(data, function(key, val){
            $("#container").append("<a href='#top' ><div id='button" + key + "' class='button btn-success' data-runner-no='" + key +"'>Nr: " + key +"<div class='lapcount'><span>Varv: </span>" + val +"</div><button class='add btn-default'><div>+</div></button><button class='remove btn-default'><div>-</div></button></div></a>");
        });
        buttonsLoaded();
    });

});


