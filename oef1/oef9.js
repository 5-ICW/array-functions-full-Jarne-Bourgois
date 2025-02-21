// Opdracht 9: Opdrachtenlijst toevoegen en afhandelen
let taken = [];
function taakToevoegen(taak) {
    taken.push(taak);
}
function verwerkTaak() {
    if (taken.length > 0) {
        console.log(`Afgehandelde taak: ${taken.shift()}`);
    }
}
taakToevoegen("Taak 1");
taakToevoegen("Taak 2");
taakToevoegen("Taak 3");
taakToevoegen("Taak 4");
taakToevoegen("Taak 5");

verwerkTaak();
verwerkTaak();
verwerkTaak();
verwerkTaak();
verwerkTaak();