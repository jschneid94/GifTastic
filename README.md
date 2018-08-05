# GifTastic

Deployed Page:
https://jschneid94.github.io/GifTastic/

GifTastic is a web app that generates gifs using the Giphy API; users can input search values which can then be used to generate gifs based around that search term. 

My approach for this project was to first gather user input using javascript and store that value into an array, which also included several existing search terms. The array would then push the values as buttons onto the page, which were all contained within a dropdown in the header of the page, to allow the page to look more responsive on mobile. Next, an event listener for any of these buttons that used AJAX to return a JSON object with ten different gifs. Finally, I added a property to the gifs to keep them motionless until the user clicked on the gif.
