//Задача1
// for (let i =1; i <= 10; i++) {
//     console.log(i);
//
// }

//Задача2
// let N =prompt("Число")
// for (let i =2; i <= N; i=i+2) {
//     console.log(i);
//
// }

//Задача3
// let N =prompt("Число")
// let sum = 0;
// for (let i =1; i <= N; i++) {
//     sum = sum + i;
// }
// alert(`Сума чисел: ${sum}`);

//Задача4
// let N =prompt("Число")
// for (let i = N; i >= 1; i--) {
//     console.log(i)
// }

//Задача5
// let N =prompt("Число")
// for (i = 1; i <= 10; i++) {
//     console.log(`${N} x ${i} = ${N * i}`);
// }

//Задача6
// const pasw = "admin123";
// let uspasw;
// do{
//     uspaw = prompt("Пароль");
//     if (uspaw !== "admin123"){
//         alert("Неправильний пароль")
//     }
// }while (uspaw !== "admin123");
// alert("Пароль правильний");

//Задача7
// const pasw = "admin123";
// let i;
// for (i = 1; i <= 3; i++) {
//     let us_pasw = prompt("Введіть пароль:");
//     if (us_pasw === pasw) {
//         alert("Доступ дозволено");
//         break;
//     }
//     alert("Неправильний пароль");
// }
//
// if (i > 3) {
//     alert("Доступ заблоковано");
// }

//Задача8
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }

//Задача9
// let N = prompt("Введіть число:");
// let count = 0;
// while (N >= 1) {
//     N = N / 10;
//     count++;
// }
// alert(count);

//Задача 10
// const num = 7;
// let us;
// do {
//     us = Number(prompt("Вгадайте число"));
//     if (us > num) {
//         alert("Менше");
//     } else if (us < num) {
//         alert("Більше");
//     } else if (us === num) {
//         alert("Вгадали");
//     } else {
//         alert("Шось не те");
//     }
// } while (us !== num);