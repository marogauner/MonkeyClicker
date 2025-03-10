function Initialize() {
    var counter = 0;
    document.getElementById("counter").innerHTML = counter;
}

function ClickOnGorilla() {
    IncrementCounter();
    PlayAnimation();
}
function IncrementCounter() {
    let counter = document.getElementById("counter").innerHTML;
    counter = parseInt(counter);
    counter += 1;
    document.getElementById("counter").innerHTML = counter;
}

function PlayAnimation() {
    let gorillaElement = document.getElementsByClassName("transformable")[0]; 
    if (gorillaElement) {
        gorillaElement.style.animationPlayState = "running";
    } else {
        console.error("Element with class 'transformable' not found.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let gorillaElement = document.querySelector(".transformable");

    if (gorillaElement) {
        gorillaElement.addEventListener("animationend", () => {
            gorillaElement.style.animationPlayState = "paused"; 
        });
    }
});