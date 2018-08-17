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

    var userInput = $(".user-input").val();
    if(userInput === "" || userInput === /\s/g) {
      $("body").removeClass("body-error");
      $(".form-message-main-container").removeClass("form-message-main-container-error");
      $(".screen").removeClass("screen-error");
      $(".input-label").removeClass("input-label-error");
      $(".user-input").removeClass("user-input-error");
      $(".submit-btn").removeClass("submit-btn-error");
      $(".no-white-space-message").show();
    } else {
      var splitInput = userInput.split("");
      var revisedNumber = removeDashAndPeriod(splitInput);
      var joinedRevisedNumber = parseInt(revisedNumber.join(""));
      var newMessageArray = checkDigitType(joinedRevisedNumber);
      var newMessage = newMessageArray.join(" ");
      $(".message").text(newMessage);

      $("body").addClass("body-error");
      $(".form-message-main-container").addClass("form-message-main-container-error");
      $(".screen").addClass("screen-error");
      $(".input-label").addClass("input-label-error");
      $(".user-input").addClass("user-input-error");
      $(".submit-btn").addClass("submit-btn-error");
    }
  });
});
