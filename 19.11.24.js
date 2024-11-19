function KazakTil() {
    alert("Сәлем!");
}

function orysTil() {
    alert("Привет!");
}

function agilsinTil() {
    alert("Hello!");
}

let isStudent = prompt("Сіз біздің студентсіз бf");

if (isStudent === "ия") {
    let tilder = prompt("Қай тілде сөйлейсіз қазақша,орысша,ағылшынша");

    if (tilder === "қазақша") {
        KazakTil();
    } else if (tilder === "орысша") {
        orysTil();
    } else if (tilder === "ағылшынша") {
        agilsinTil();
    } else {
        alert("бұл тіл жоқ");
    }
} else {
    alert("Жақсы сау бол");
}
