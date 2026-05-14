const exchangeusd = 43.7;
const exchangeeur = 51.2;
const podatki = 18000;
const commission = 0.05;
const povernis = 0.10;
const dity =0.05;
const business = 100000;
const saveeur = 2500;
const saveusd = 3000;
let income_1 = 100000;
let income_2 = 200000;
let income_3 = 300000;
let income_4 = 150000;
let totalincome = income_1 + income_2 + income_3 + income_4;

let fullcommission = totalincome * commission;
let afterall = totalincome -fullcommission - podatki;

let forpovernis = afterall * povernis;
let fordity = afterall * dity;

let allsaves = (saveeur * exchangeeur) + (saveusd * exchangeusd);
let finalbalance = afterall - fordity - forpovernis - business - allsaves;
console.log(`За рік Максим заробив — ${totalincome} грн`);
console.log(`Єдиний податок 5% складає ${fullcommission} грн`);
console.log(`Відрахування у фонди «Повернись живим» та «Діти Героїв» складає ${forpovernis} грн та ${fordity} грн відповідно`);
console.log(`На валютну карту сумарно відкладено ще ${allsaves} грн`);
console.log(`Залишок на рахунку Максима складає ${finalbalance} грн`);
