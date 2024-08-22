"use strict";
//Declaring Variables
const dogAnimation = document.getElementById("dog-animation");
const calculateButton = document.getElementById("calculate-button");
const result = document.getElementById("result");
const dogAgeInput = document.getElementById("dog-age");

//Declaring Functions
function calculateHumanAge(dogAge) {
  let humanAge = 16 * Math.log(dogAge) + 31;
  return Math.floor(humanAge);
}

const calculateDogAge = function () {
  const dogAge = document.getElementById("dog-age").value;
  if (dogAge === "" || dogAge <= 0) {
    result.textContent = "Please enter a valid age!";
  } else {
    const humanAge = calculateHumanAge(dogAge);
    result.textContent = `Your dog is approximately ${humanAge} human years old.`;
  }
};

//Adding Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    dogAnimation.style.opacity = "0";
    setTimeout(() => {
      dogAnimation.style.display = "none";
    }, 2000);
  }, 3000);
});

calculateButton.addEventListener("click", calculateDogAge);

dogAgeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    calculateDogAge();
  }
});
