// 12. Controleer deelbaarheid door 10
const numbers = [10, 20, 45, 30, 40, 15];
const kanDeling = numbers.map(num => `${num} - ${num % 10 === 0 ? 'het kan gedeeld worden' : 'het kan niet gedeeld worden'}`);
console.log(kanDeling);