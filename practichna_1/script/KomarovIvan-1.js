let amount = 3500;
const exchange = 43.7;
const commission = 0.005;
let UAH = amount * exchange;
let Forbank = UAH * commission;
let finalamount = UAH - Forbank;
console.log(`Після виконання проєкту, буде нараховано ${finalamount} грн з урахуванням комісії банку!`);

