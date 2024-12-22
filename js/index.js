// Detecting Button Press
var noofDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noofDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click",
        function() {
            var buttonInnerHTML = this.innerHTML;
            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);
        }
    );
}

// Detecting Key Press
document.addEventListener("keydown",
    function(event) {
        makeSound(event.key);
        buttonAnimation(event.key);
    }
);


// Figuring which sound to play
function makeSound(key) {

    var music;

    switch (key) {
        case "w":
            music = "./assets/sounds/tom-1.mp3";
            break;
        case "a":
            music = "./assets/sounds/tom-2.mp3";
            break;
        case "s":
            music = "./assets/sounds/tom-3.mp3";
            break;
        case "d":
            music = "./assets/sounds/tom-4.mp3";
            break;
        case "j":
            music = "./assets/sounds/snare.mp3";
            break;
        case "k":
            music = "./assets/sounds/crash.mp3";
            break;
        case "l":
            music = "./assets/sounds/kick-bass.mp3";
            break;
        default:
            alert("Incorrect key");
    }

    var audio = new Audio(music);
    audio.play();
}

// Creating Button Animation
function buttonAnimation(currentKey) {
    // getting the button/key which is pressed
    var activeButton = document.querySelector("." + currentKey);

    // Adding pressed classed to the button pressed
    activeButton.classList.add("pressed");

    // Removing pressed class of 100 millisecond delay after pressed
    setTimeout(function() { activeButton.classList.remove("pressed") }, 100);
}