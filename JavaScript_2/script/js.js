// console.log('dadasda')
// false
// 0
// null
// 0n
// ""
// undefined
// NaN
//
// if(умова){
//     [інструкція, якщо істина];
//     [інструкція, якщо істина];
//     [інструкція, якщо істина];
// }
// else if{
//     [інструкція, якщо істина];
//     [інструкція, якщо істина];
//
// }
// else{
//     [інструкція, якщо хибно]
// }

// ==
// !=
// >
// <
// >=
// <=
// ===
// !==

// let a =3, b = "3";
// console.log(a == b);
// console.log(a === b);

// let a = prompt("1st number: ");
// let b = prompt("2nd number: ");
// let c;
//
// if (a > b)c='a>b';
// else if (a < b)c='a<b';
// else c ="a == b";

// if (a > b) {
//     c = "a > b";
// }else if(a < b){
//     c = "a < b";
// }
// else {
//     c = "a == b"
// }
// alert(c);


//умова switch

// let course = prompt("What is the name of the course?"), title;
//
// switch(course) {
//     case 'css':
//     case 'js':
//     case 'figma':
//         title = 'Web developing';
//         break;
//
//
//     case 'python':
//         title = "програмування"
//         break;
//
//     case 'html':
//     case 'frontend':
//         title = "Web programming";
//         break;
//
//
//     default:
//         title = "WHAT";
// }
// alert(title);


//Логічні оператори

// let a = false, b = false, c = true;
//
// console.log(!a); //заперечення
// console.log(!!a); // стрінгове заперечення
//
// console.log(a && c);
// console.log(a||b);



// let age = prompt("What is your name?"), info;
// if (age<18){
//     info='школота'
// }else if (age >=18 && age <= 35){
//     info = 'призивний'
// }
// else{
//     info = 'ЩЕ Є ШАНСИ'
// }
// alert(info)


// let name = prompt("What is your name?");
// let greetings = `Вітаємо, ${name || 'Гість'}`
// alert(greetings);