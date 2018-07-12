// Array of animals
var topics = ["cat", "dog", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle", "chicken", "chinchilla", "hedgehog", "pygmy goat", "hermit crab"];

// Creates button when page loads
function generateButton() {

    $("#buttonSection").empty();

    for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button/>");
        newButton.addClass("animalButton dropdown-item");
        newButton.attr("data-name", topics[i]);
        newButton.text(topics[i]);
        $("#buttonSection").append(newButton);
    }
}

$(document).ready(function () {

    generateButton();

    // When a button is clicked, event listener generates gifs with giphy API
    $("#buttonSection").on("click",".animalButton", function() {

        var animal = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=GTFr2E2yjNnqLYzN3hbN5dShP4d2Es7F&limit=10";


        $.ajax({
            url: queryURL, 
            method: "GET"
        }).then(function(response){

            console.log(response);

            var results = response.data;

            for (var i = 0; i < results.length; i++) {

                // Create a div for containing and spacing
                var gifDiv = $("<div>");
                gifDiv.addClass("my-4 mx-auto");

                // Gif with data attr
                var newGif = $("<img>");
                var stillUrl = results[i].images.fixed_width_still.url;
                var animateUrl = results[i].images.fixed_width.url;
                newGif.attr("src", stillUrl);
                newGif.addClass("gif d-block mx-auto");
                newGif.attr("data-still", stillUrl);
                newGif.attr("data-animate", animateUrl);
                newGif.attr("data-state", "still");

                // Rating
                var rating = $("<div>Rating: " + results[i].rating + "</div>");
                rating.addClass("text-center text-light bg-secondary");

                // Put gif and rating into the div and generate in DOM
                gifDiv.append(newGif, rating);
                $("#gifGenerated").prepend(gifDiv);
            }
        });

    });

    // When gif is clicked, play or pause the gif
    $("#gifGenerated").on("click", ".gif", function() {

        var state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } 
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }

    });

    $("#submit").on("click", function() {

        event.preventDefault();
        var textInput = $("#buttonName").val();

        if (textInput === "") {
            alert("You can't create a button without a search term!");
            return false
        } else {
            topics.push(textInput);
            generateButton();
            $("#buttonName").val("");
        }
    });

});