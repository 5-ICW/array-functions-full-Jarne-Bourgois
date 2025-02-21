// 14. Sorteer namen op basis van leeftijden
const namen = ["Jos", "Kesel", "Maria", "Blomme"];
const leeftijden = [12, 82, 75, 44];
const gecombineerd = namen.map((name, index) => ({ name, leeftijd: leeftijden[index] }));

gecombineerd.sort((a, b) => a.leeftijd - b.leeftijd);
const sorteerdeNamen = gecombineerd.map(item => item.name);
const sorteerdeLeeftijd = gecombineerd.map(item => item.leeftijd);

console.log(sorteerdeNamen);
console.log(sorteerdeLeeftijd);
