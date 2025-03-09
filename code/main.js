function Initialize() {
    var counter = 0;
    document.getElementById("counter").innerHTML = counter;
}
function incrementCounter() {
    let counter = document.getElementById("counter").innerHTML;
    counter = parseInt(counter);
    counter += 1;
    document.getElementById("counter").innerHTML = counter;
}