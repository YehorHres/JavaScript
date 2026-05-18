let day = prompt("День тижня:")
let text;

switch (day) {
    case "понеділок":
    case "вівторок":
    case "середа":
        text = "Вартість квитка складає 150 грн";
        break;
    case "четвер":
    case "п’ятниця":
        text = "Вартість квитка складає 200 грн";
        break;
    case "субота":
    case "неділя":
        text = "Вартість квитка складає 250 грн";
        break;
    default:
        text = "Помилка введення дня тижня";

}

console.log(text);
alert(text)