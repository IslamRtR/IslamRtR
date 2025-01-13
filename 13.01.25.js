let countdown;
let timeLeft = 5;

document.getElementById('startButton').addEventListener('click', function() {
    clearInterval(countdown);
    timeLeft = 5;
    document.getElementById('countdown').innerText = timeLeft;

    countdown = setInterval(function() {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerText = "Уақытыңыз аяқталды!";
        } else {
            document.getElementById('countdown').innerText = timeLeft;
        }
    }, 1000);
});
