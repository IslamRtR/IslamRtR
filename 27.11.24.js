let sandar = [];

while (true) {
    let input = prompt("Сан енгізіңіз (тоқтату үшін 0 енгізіңіз):");

    if (input === "0") {
        break;
    }

    if (input % 2 === 0) {
        sandar.unshift(input);
    } else {
        sandar.push(input);
    }
}

console.log("Массив:", sandar);
console.log("Массив ұзындығы:", sandar.length);
