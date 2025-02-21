// Opdracht 4: Functie om de totaalprijs te berekenen
let autos = [
    { kleur: 'geel', merk: 'Toyota', bouwjaar: 2018, prijs: 18000 },
    { kleur: 'oranje', merk: 'BMW', bouwjaar: 2020, prijs: 22000 },
    { kleur: 'zwart', merk: 'Audi', bouwjaar: 2019, prijs: 20000 }
];

function berekenTotaalPrijs(autos) {
    return autos.reduce((total, auto) => total + auto.prijs, 0);
}
console.log(`Totaalprijs: €${berekenTotaalPrijs(autos)}`);