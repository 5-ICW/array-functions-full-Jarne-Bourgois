// 1. Filter even getallen en verdubbel ze
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dubbeleven = numbers.filter(num => num % 2 === 0).map(num => num * 2);
console.log(dubbeleven);
