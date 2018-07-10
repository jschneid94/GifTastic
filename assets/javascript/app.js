// Array of animals
var topics = ["cat", "dog", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle", "chicken", "chinchilla", "hedgehog", "pygmy goat", "hermit crab"];

$(document).ready(function () {

    // Creates button when page loads
    for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button/>");
        newButton.addClass("animalButton");
        newButton.attr("data-name", topics[i]);
        newButton.text(topics[i]);
        $("#buttonSection").append(newButton);
    }

    // When a button is clicked, event listener generates gifs with giphy API
    $(".animalButton").on("click", function() {

        var animal = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=GTFr2E2yjNnqLYzN3hbN5dShP4d2Es7F&limit=10";


        $.ajax({
            url: queryURL, 
            method: "GET"
        }).then(function(response){

            console.log(response);

            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div/>")
                var rating = $("<div>Rating: " + results[i].rating + "</div>");
                var newGif = $("<img src=" + results[i].images.fixed_width_still.url + ">");
                newGif.addClass("gif");
                newGif.attr("data-still", results[i].images.fixed_width_still.url);
                newGif.attr("data-animate", results[i].images.fixed_width.url);
                newGif.attr("data-state", "still");
                gifDiv.append(rating, newGif);
                $("#gifGenerated").prepend(gifDiv);
            }
        });

    });

    // When gif is clicked, play or pause the gif
    $(".gif").on("click", function() {

        var state = $(this).attr("data-state");
        var stillUrl = $(this).attr("data-still");
        var animateUrl = $(this).attr("data-animate");

        if (state === "still") {
            $(this).attr("src", animateUrl);
            $(this).attr("data-state", "animate");
        } 
        else if (state === "animate") {
            $(this).attr("src", stillUrl);
            $(this).attr("data-state", "still");
        }

    });

});