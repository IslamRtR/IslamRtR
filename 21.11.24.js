function KZTToEUR(param) {
    const translater = 0.002;
    return param * translater;
}

function USDToEUR(param) {
    const translater = 0.85;
    return param * translater;
}

function EURToEUR(param) {
    return param;
}

function cashTranslater() {
    let sum = 0;
    while (true) {
        let numb = prompt("summa engiz(KZT, USD , EUR):").toLowerCase();
        if (numb === "stop" || numb === "стоп") {
            break;
        } else if (isNaN(numb) || numb <= 0 || numb === null) {
            continue;
        } else {
            numb = parseFloat(numb); 
            let currency = prompt("volutanizdy jaz (KZT, USD , EUR):").toUpperCase();
            if (currency === "KZT") {
                sum += KZTToEUR(numb);
            } else if (currency === "USD") {
                sum += USDToEUR(numb);
            } else if (currency === "EUR") {
                sum += EURToEUR(numb);
            } else {
                alert("bundai voluta jok");
                continue;
            }
        }
    }
    alert('obshi baga ' + sum + ' EUR');
}

cashTranslater();
