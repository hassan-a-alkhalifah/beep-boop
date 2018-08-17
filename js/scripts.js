// business logic


// user interface logic
$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();

    var userInput = $(".userInput").val();

    $(".message").text(userInput);
  });
});
