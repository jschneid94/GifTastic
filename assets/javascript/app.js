// Array of animals
var topics = ["cat", "dog", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle", "chicken", "chinchilla", "hedgehog", "pygmy goat", "hermit crab"];

$(document).ready(function () {

    for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button/>");
        newButton.addClass("animalButton");
        newButton.attr("data-name", topics[i]);
        newButton.text(topics[i]);
        $("#buttonSection").append(newButton);
    }

    $(".animalButton").on("click", function() {

        var animal = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=GTFr2E2yjNnqLYzN3hbN5dShP4d2Es7F";


        $.ajax({
            url: queryURL, 
            method: "GET"
        }).then(function(response){

            console.log(response);

            results = response.data;

            for (var i = 0; i < 10; i++) {
                var newGif = $("<img/>");
                newGif.attr("src", results[i].images.fixed_width_still.url);
                newGif.addClass("gif");
                $("#gifGenerated").append(newGif);
            }
        });

    });

});