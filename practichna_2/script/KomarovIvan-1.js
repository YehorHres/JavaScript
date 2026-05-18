let isAuthorized = prompt("Авторизований користувач(true or false?");
let internetSpeed = prompt("Швидкість інтернету?");
let isBanned = prompt("Заблокований акаунт (true or false?)");

let result;
if (isAuthorized === "true" && internetSpeed >= 20 && isBanned === "false") {
    result = "Доступ дозволено";
} else{
    result = "Доступ заборонено";
}


console.log(result);
alert(result);