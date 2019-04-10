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

     makeButtons()
 });
 //Perform an AJAX GET request to querURL
 $.ajax({
    url: queryURL,
    method: "GET"

 })
    //after data comes back from ajax requesr
    .then(function(response){
    //getting image URL of gif
    var imageUrl = response.data.image_original_url;

    //create an image tag
    var gifImage = $("<image>")

    //setting the gifImagesrc attribute to imageurl
    gifImage.attr("src, imageUrl");
    gifImage.attr("alt","gif-area" )

    //prepend the gifImage to the images
    $("#gif-area").prepend(gifImage);
    })


    



