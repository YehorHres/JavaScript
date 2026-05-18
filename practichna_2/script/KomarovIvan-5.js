let grade = prompt("Оцінка");
let text;


switch (grade) {
    case "12":
    case "11":
    case "10":
        text = "Відмінний результат"
        break;
    case "9":
    case "8":
    case "7":
        text = "Добрий результат";
        break;
    case "6":
    case "5":
    case "4":
        text = "Задовільний результат";
        break;
    case "3":
    case "2":
    case "1":
        text = "Потрібно покращити знання";
        break;
    default:
        text = "Некоректна оцінка";

}

console.log(text);
alert(text);
