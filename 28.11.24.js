// Берілген массив
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let cubedOdds = numbers.map(num => num ** 3).filter(cubedNum => cubedNum % 2 !== 0);

console.log(cubedOdds);


// Студенттер санын енгізу
let numStudents = prompt("Студенттер санын енгізіңіз:");


let grades = [];
for (let i = 0; i < numStudents; i++) {
  let grade = prompt(`Студент ${i+1} бағасын енгізіңіз:`);
  grades.push(Number(grade));
}

let totalGrades = grades.reduce((acc, grade) => acc + grade, 0);
let averageGrade = totalGrades / numStudents;

let highGrades = grades.filter(grade => grade > 85);

console.log(`Орташа баға: ${averageGrade}`);
console.log(`85-тен жоғары бағалар: ${highGrades}`);
