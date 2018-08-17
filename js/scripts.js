// business logic


// user interface logic
$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    $(".white-space-message").hide();
    var userInput = $(".userInput").val();
    if(userInput === "" || userInput === /\s/g) {
      $(".white-space-message").show();
    } else {
      $(".message").text(userInput);
    }
  });
});
