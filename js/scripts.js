// business logic


// user interface logic
$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    $(".white-space-message").hide();
    $(".no-special-character-message").hide();
    $(".message").text("");
    var userInput = $(".userInput").val();

    if(userInput === "" || userInput === /\s/g) {
      $(".no-white-space-message").show();
    } else {
      var splitInput = userInput.split("");
      var revisedNumber = [];
      splitInput.forEach(function(digit) {
        if(digit === "-" || digit === ".") {
          return;
        } else {
          revisedNumber.push(digit);
        }
      });
      var joinedRevisedNumber = parseInt(revisedNumber.join(""));
      var range = [];
      var test = 0;
      console.log(joinedRevisedNumber);
      for(var i = 0; i <= joinedRevisedNumber; i++) {
        console.log(i)
        range.push(i);
      }
      $(".message").text(range);
      console.log(range);
    }
  });
});
