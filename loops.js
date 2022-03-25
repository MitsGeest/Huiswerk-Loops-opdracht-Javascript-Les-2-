// ==========================================
// Opdracht 1. Maak een for-loop die 3 keer "Hoera!" in de terminal logt
// Verwachte uitkomsten:
// Hoera!
// Hoera!
// Hoera!
// ==========================================

const felicitatie = "Hoera!";

for (let i = 0; i < 3; i++) {
    console.log(felicitatie);
}

// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de vijfde loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
 // ==========================================

//STAPPENPLAN
// 1. Declareer variabelen die als uitkomst van de loop dienen
// 2. Maak een for-loop die vijf uitkomsten geeft
// 3. Bepaal dat de eerste vier uitkomsten "loop..." geven
// 4. Bepaal dat de laatste uitkomst "klaar!" geeft.

const firstLoop = "loop..";
const endLoop = "klaar!";

for (let i = 0; i < 5; i++) {
    if (i < 4) {
        console.log(firstLoop);
    } else {
        console.log(endLoop);
    }
}

// ==========================================
// Opdracht 3. Maak een for-loop die van 0 tot 15 loopt. Voor ieder getal wordt in de console gelogd of het getal even of oneven is.
// Verwachte uitkomsten:
// 0 is even
// 1 is oneven
// 2 is even
// 3 is oneven
// .... etc.
// 15 is oneven

// Tip: een getal is oneven als je het door 2 deelt en er blijft nog iets over. Een getal is even als je het deelt door 2 en er blijft niets over. Google daarom eens naar 'mdn webdocs remainder operator'.
// ==========================================

//STAPPENPLAN
// 1. Maak een for loop die van 0 tot 15 loopt
// 2. Bepaal welke uitkomsten even zijn en welke uitkomsten oneven zijn door gebruik te maken van de remainder operator
// 3. Bepaal de variabelen die onderdeel zijn van de console.log
// 4. Formuleer de uitkomsten voor de even en de oneven optie

const evenOutcome = " is even";
const unevenOutcome = " is oneven";

for (let i = 0; i < 16; i++) {
    if (i % 2 === 0) {
        console.log(i + evenOutcome);
    } else {
        console.log(i + unevenOutcome);
    }
}

// ==========================================
// [BONUSOPDRACHT] - optioneel: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================

for (let i=0; i<10; i++) {
    if (i < 4) {
        console.log(i);
    } else if (i < 7) {
        console.log("> " + i);
    } else {
        console.log (">> " + i);
    }
}