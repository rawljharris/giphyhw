 // arrays for topics
 var topics = ["Movies", "Animals", "Weather", "Travel", "School"];

 function makeButtons() {

     $("#button-area").empty();

     // create a for loop for your array
     for (i = 0; i < topics.length; i++) {
         var gifBtn = $("<button>")
         gifBtn.addClass("topic")
         gifBtn.attr("data-name", topics[i])
         gifBtn.text(topics[i])
         $("#button-area").append(gifBtn)
     }
 }

 $("#submitBtn").on("click", function (event) {
     event.preventDefault();
     // grabs input from text box
     var inputTopic = $("#categoryInput").val().trim()

     topics.push(inputTopic)
     // after new topic is added, remake buttons on page
     makeButtons();
 });

 // render buttons on page load
 makeButtons();

 $(document).on("click", ".topic", function (event) {
     var type = $(this).attr("data-name");

     var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=X9ONIZ5p8e59fZHoIppNw7mqwxVK84FM"

     //Perform an AJAX GET request to querURL
     $.ajax({
             url: queryURL,
             method: "GET"

         })
         //after data comes back from ajax requesr
         .then(function (response) {
             //getting image URL of gif
             console.log(response.data);

             var images = response.data;
             //create an image tag
             for (var i = 0; i < images.length; i++) {

                 var imageUrl = images[i].images.fixed_height_still.url;
                 var gifImage = $("<img>");

                 // add attribute to gifImage called "data-still" and set it to images[i].images.fixed_height_still.url
                gifImage.attr("data-still", images[i].images.fixed_height_still.url);
                 // add attribute to gifImage called "data-animate" and set it to images[i].images.fixed_height.url
                 gifImage.attr("data-animate", images[i].images.fixed_height.url);

                 // add attribute to gifImage called "data-state" and set it to "still"
                 gifImage.attr("data-state", "still");

        
                 //setting the gifImagesrc attribute to imageurl
                 gifImage.attr("src", imageUrl);
                 gifImage.addClass("gif");
                 gifImage.attr("alt", "gif-area")

                 //prepend the gifImage to the images
                 $("#gif-area").append(gifImage);
             }
         })
 })

 // click event for making a gif move
 $(document).on("click", ".gif",function(){

    // GET the current value of the button's data-state
    if (state === "still") {
        $(this).attr("src", $this.attr("data-animate"));
        $(this).attr("data-stae", "animate");
    }
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
        
    


    // if it's state is "still", then let's use the data-animate's value to make the image move

    // otherwise let's make it still

 })