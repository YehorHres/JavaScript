let temperature = prompt("Температура в кімнаті:");
let sensorError = prompt("чи є помилка датчика (true/false)");



let text;

if (sensorError === "true") {
    text = "Помилка датчика температури";
} else if (temperature < 18) {
    text = "Увімкнути обігрів";
} else if (temperature >= 18 && temperature <= 25) {
    text = "Температура комфортна";
} else {
    text = "Увімкнути кондиціонер";
}

console.log(text);
alert(text);