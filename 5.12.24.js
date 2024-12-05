let tasks = [
    { name: "Тапсырма 1", completed: false },
    { name: "Тапсырма 2", completed: true },
    { name: "Тапсырма 3", completed: false },
    { name: "Тапсырма 4", completed: true },
    { name: "Тапсырма 5", completed: false }
];


let incompleteTasks = tasks.filter(task => !task.completed);
alert("Орындалмаған тапсырмалар: " + incompleteTasks.map(task => task.name).join(", "));


let taskNumber = +prompt("Тапсырма нөмірін енгізіңіз (1 бастап " + tasks.length + " дейін):");
if (taskNumber >= 1 && taskNumber <= tasks.length) {
    tasks[taskNumber - 1].completed = true;
} else {
    alert("Жарамсыз тапсырма нөмірі!");
}


let completedTasks = tasks.filter(task => task.completed);
alert("Аяқталған тапсырмалар: " + completedTasks.map(task => task.name).join(", "));
