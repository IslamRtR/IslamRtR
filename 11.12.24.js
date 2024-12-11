function makeGreen() {
    let box = document.getElementById('box');
    box.style.backgroundColor = "green";
}

function expandWidth() {
    let box = document.getElementById('box');
    box.style.width = (box.offsetWidth + 20) + "px";
}

function expandHeight() {
    let box = document.getElementById('box');
    box.style.height = (box.offsetHeight + 20) + "px";
}

let box = document.getElementById('box');

box.addEventListener("mouseenter", function() {
    box.querySelector('p').textContent = "Сіздің мышкаңыз қораптың ішінде!";
});

box.addEventListener("mouseleave", function() {
    box.querySelector('p').textContent = "Сіздің мышкаңыз қораптан шығып кетті!";
});
