// Created by Scott Traver
var fraudAmount = new Date().getTime();// a really big growing number that won't repeat
var fraudNumber = Number(fraudAmount.toString().substring(6));
var formatFraud = function (input) {
    return '$' + input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
var tick = function () {
    fraudNumber++;
    document.getElementById('fraud-amount').innerHTML = formatFraud(fraudNumber)
}

var startValue = fraudNumber - 200;// animate to the current value a little bit
var animate = function (element, endValue) {
    var interval = setInterval(function () {
        element.innerHTML = formatFraud(startValue);
        startValue++;
        if (startValue > endValue) {
            clearInterval(interval)
            // start ticking upward in seconds
            setInterval(function () {
                tick()
            }, 1000);// tick interval in milliseconds
        }
    }, 1);// how fast it spinns up to the current value
}

animate(document.getElementById('fraud-amount'), fraudNumber);
