// 13. Sorteer de array van vraag 12
const numbers = [10, 20, 45, 30, 40, 15];
const kanDeling = numbers.map(num => `${num} - ${num % 10 === 0 ? 'het kan gedeeld worden' : 'het kan niet gedeeld worden'}`);
const gesorteerdeDeling = [...kanDeling].sort((a, b) => parseInt(a) - parseInt(b));
console.log(gesorteerdeDeling);
