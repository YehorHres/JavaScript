let genre = prompt("Жанр музики:");
let text;
switch(genre) {
    case "rock":
        text = "Увімкнено рок-плейлист";
        break;
    case "pop":
        text = "Увімкнено поп-плейлист";
        break;
    case "jazz":
        text = "Увімкнено джаз-плейлист";
        break;
    case "classical":
        text = "Увімкнено класичну музику";
        break;
    default:
        text = "Жанр не знайдено"
}

console.log(text);
alert(text);
