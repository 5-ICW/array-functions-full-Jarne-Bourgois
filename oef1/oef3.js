// Opdracht 3: Maak een array met 3 wagen objecten
let autos = [
    { kleur: 'geel', merk: 'Toyota', bouwjaar: 2018, prijs: 18000 },
    { kleur: 'oranje', merk: 'BMW', bouwjaar: 2020, prijs: 22000 },
    { kleur: 'zwart', merk: 'Audi', bouwjaar: 2019, prijs: 20000 }
];
autos.forEach(auto => console.log(`${auto.merk}: €${auto.prijs}`));