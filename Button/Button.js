console.log("the Message!!");

let theYear = ["Jan", "Feb", "March", "april"];

for (var i = 0; i < theYear.length; i++) {
    console.log(theYear[i]);
}
// add an item to the arry using push
theYear.push("may");
// console.log(theYear);
//
// pass the all the HTML in the body tags into a variable 
const theBody = document.querySelector('body');
// console.log(theBody);
// .style is the property that holds all the sub CSS properties!
console.log(theBody.style);
let theText = document.querySelector('h2');

// .textContent holds the human readable text inside the HTML element text
// console.log(theText.textContent)
// pass the HTML element into a variable
let theButton = document.querySelector("#theFirst");
// add an eventListener to the button and trigger a function when it happend
var Presses = 0;
theButton.addEventListener('click', myFunction);



function myFunction() {
    Presses++;
    console.log(Presses);
    if (Presses == 1) {
        theText.textContent = "I said don't press it.";
        return;
    }
 
        if (Presses = 2) {
            theText.textContent = "Don't as in do not.";
            return;
        }
        if (Presses = 3) {
            theText.textContent = "Seriously?";
            return;
        }
        if (Presses = 4) {
            theText.textContent = "Now you're just being a jerk.";
            return;
        }
        if (Presses = 5) {
            theText.textContent = "Stop.";
            return;
        }
        if (Presses = 6) {
            theText.textContent = "Final warning!";
            return;
        }
        if (Presses = 7) {
            theText.textContent = "I'm serious this time.";
            return;
        }
        if (Presses = 8) {
            theText.textContent = "Fine.";
            return;
        }
        if (Presses = 9) {
            theText.textContent = "Press the button.";
            return;
        }
    }


