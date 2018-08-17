// BUSINESS LOGIC
// function removes dashes and period from entered number
var removeDashAndPeriod = function(userInput) {
  var revisedNumber = [];
  userInput.forEach(function(digit) {
    if(digit === "-" || digit === ".") {
      return;
    } else {
      revisedNumber.push(digit);
    }
  });
  return revisedNumber;
}
// function checks digit of each if 0, 1 or divisible by 3
var checkDigitType = function(number) {
  var newMessageArray = [];
  for(var i = 0; i <= number; i++) {
    var numberToCheck = i.toString();
    if(numberToCheck.includes("0")) {
      newMessageArray.push("Boop!");
    } else if(numberToCheck.includes("1")) {
      newMessageArray.push("Beep!");
    } else if(parseInt(numberToCheck) % 3 === 0) {
      newMessageArray.push("I'm sorry Bill, I'm afraid I can't do that.");
    } else {
      newMessageArray.push(numberToCheck);
    }
  }
  return newMessageArray;
}

// USER INTERFACE LOGIC
$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();

    $(".no-white-space-message").hide();
    $(".message").empty();
    
    var userInput = $(".userInput").val();
    if(userInput === "" || userInput === /\s/g) {
      $(".no-white-space-message").show();
    } else {
      var splitInput = userInput.split("");
      var revisedNumber = removeDashAndPeriod(splitInput);
      var joinedRevisedNumber = parseInt(revisedNumber.join(""));
      var newMessageArray = checkDigitType(joinedRevisedNumber);
      var newMessage = newMessageArray.join(" ");
      $(".message").text(newMessage);
    }
  });
});
