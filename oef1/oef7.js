// Opdracht 7: Sorteer de wagens op basis van merk (a-z)
let autos = [
    { kleur: 'geel', merk: 'Toyota', bouwjaar: 2018, prijs: 18000 },
    { kleur: 'oranje', merk: 'BMW', bouwjaar: 2020, prijs: 22000 },
    { kleur: 'zwart', merk: 'Audi', bouwjaar: 2019, prijs: 20000 }
];
autos.sort((a, b) => a.merk.localeCompare(b.merk));
console.log(autos);
