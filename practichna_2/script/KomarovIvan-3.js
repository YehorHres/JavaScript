let score = prompt("кількість балів");
let homeworkDone = prompt("чи виконані домашні завдання (true або false)");
let finalTestPassed = prompt("чи пройдено фінальний тест (true або false)");
let text;
if (homeworkDone === "true" && finalTestPassed === "true" && score >= 70) {
    text = "Сертифікат успішно отримано"
} else {
    text = "Умови для отримання сертифіката не виконані"
}


console.log(text);
alert(text);
