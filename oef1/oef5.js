// Opdracht 5: Maak een nieuwe array met enkel merk en bouwjaar
let autos = [
    { kleur: 'geel', merk: 'Toyota', bouwjaar: 2018, prijs: 18000 },
    { kleur: 'oranje', merk: 'BMW', bouwjaar: 2020, prijs: 22000 },
    { kleur: 'zwart', merk: 'Audi', bouwjaar: 2019, prijs: 20000 }
];
let autoMerkEnJaar = autos.map(auto => ({ merk: auto.merk, bouwjaar: auto.bouwjaar }));
console.log(autoMerkEnJaar);
