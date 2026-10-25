(function() {
    "use strict";
    console.log("reading js");

const madlibsForm = document.querySelector("#madlibsForm");
const result = document.querySelector("#result");
const completedStory = document.querySelector("#completedStory");
const tryAgain = document.querySelector("#tryAgain");

    madlibsForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const food = document.querySelector("#food").value;
    const adjective = document.querySelector("#adjective").value;
    const animal = document.querySelector("#animal").value;
    const verb = document.querySelector("#verb").value;
    const noise = document.querySelector("#noise").value;
    const number = document.querySelector("#number").value;
    const cuisine = document.querySelector("#cuisine").value;

    completedStory.textContent = `Tonight, I decided to cook ${food} for dinner. Everything was ${adjective} until a ${animal} ran into the kitchen and started ${verb} on the table. Suddenly, the pot went ${noise}! This made me accidentally spill ${number} extra teaspoons of salt. When I took a bite, I recoiled in disgust. I should’ve just ordered ${cuisine} instead...`;

    madlibsForm.hidden = true;
    result.hidden = false;
    } );

    tryAgain.addEventListener("click", function(event) {
        madlibsForm.reset();
        madlibsForm.hidden = false;
        result.hidden = true;
    } );

} )();
