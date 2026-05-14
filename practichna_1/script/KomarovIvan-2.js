const exchange = 43.7;
const podatok = 4500;
const comission = 0.05;

let amount_1 = 68000;
let amount_2 = 2600 * exchange;
let amount_3 = 1900 * exchange;

let total = amount_1 + amount_2 + amount_3;
let totalcommission = (total * comission) + podatok;

console.log(`Загальна сума доходу Максима складає ${total} грн`);
console.log(`В кінці кварталу Максиму необхідно сплатити ${totalcommission} грн`);