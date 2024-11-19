function compareWords(word1, word2) {
    
    let lowerWord1 = word1.toLowerCase();
    let lowerWord2 = word2.toLowerCase();

    if (lowerWord1 === lowerWord2) {
        return "Сөздер бірдей";
    } else {
        return "Сөздер әртүрлі";
    }
}

alert(compareWords("Javascript", "javascript"));
alert(compareWords("Hello", "world"));           
alert(compareWords("Kazakhstan", "kazakhstan")); 