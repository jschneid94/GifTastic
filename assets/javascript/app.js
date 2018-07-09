// Array of animals
var topics = ["cat", "dog", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle", "chicken", "chinchilla", "hedgehog", "pygmy goat", "hermit crab"];

$(document).ready(function () {

    for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button/>");
        newButton.addClass("animalButton");
        newButton.text(topics[i]);
    }

    $("button").on("click", ".animalButton", function() {

        
    });

});