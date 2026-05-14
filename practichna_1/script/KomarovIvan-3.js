const exchange_1 = 43.7;
const exchange_2 = 44.7;
const exchange_3 = 45.7;
const coworking = 3500;
const technic = 4000;
const netflix = 9.99;
const podatok = 4500;
const commission = 0.05;

let balance = 210000;

let amount_1 = 60000;
let amount_2 = 2600 * exchange_2;
let amount_3 = 1700 * exchange_3;

let totalearn = amount_1 + amount_2 + amount_3;

let spend_1 = coworking + technic + (netflix * exchange_1);
let spend_2 = coworking + technic + (netflix * exchange_2);
let spend_3 = coworking + technic + (netflix * exchange_3);

let totalspend = spend_1 + spend_2 + spend_3;
let totalpodatki = podatok + (totalearn * commission);
let finalbalance = balance + totalearn - totalspend - totalpodatki;

console.log(`В цьому кварталі Максим витратив ${totalspend} грн`);
console.log(`Загальний дохід Максима за квартал становить ${totalearn} грн`);
console.log(`Загальна сума податків становить ${totalpodatki} грн`);
console.log(`Отже, наприкінці кварталу залишок на рахунку Максима становить ${finalbalance} грн`);
