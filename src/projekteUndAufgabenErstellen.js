import {projekt} from "./construktorProjekte"
import {aufgabe} from "./construktorAufgaben"
import {nutzerProjekte} from "./nutzerProjekte"

export class projekteUndAufgabenErstellen {
    
    static neuesProjekt(){
        const titel = prompt("Titel von neuem Projekt eingeben");
        const neuesProjekt = new projekt(titel);
        nutzerProjekte.push(neuesProjekt);
    }

    static neueAufgabe(){
        const titelProjekt = prompt("Projekt für die Aufgabe auswählen");
        const titel = prompt("Titel von neuer Aufgabe eingeben");
        const beschreibung = prompt("Beschreibung von neuer Aufgabe eingeben");
        const endtermin = {Datum: prompt("Datum von Endtermin eingeben"), Uhrzeit: prompt("Uhrzeit von Endtermin eingeben")};
        const priorität = prompt("priorität von neuer Aufgabe eingeben");
        const zwischenschritte = [];
        let zwischenschritt;
        while (true) {
            zwischenschritt = {titel: prompt("Zwischenschritte von neuer Aufgabe eingeben"), erledigt: false};
            if (zwischenschritt.titel == "") break;
            zwischenschritte.push(zwischenschritt);
        }
        const neueAufgabe = new aufgabe(titel, beschreibung, endtermin, priorität, zwischenschritte);
        const index = nutzerProjekte.findIndex(p => p.titel == titelProjekt);
        nutzerProjekte[index].aufgaben.push(neueAufgabe)
    }

    static beispielprojekt(){
        const neuesProjekt = new projekt("Mein Projekt");
        nutzerProjekte.push(neuesProjekt);
        const aufgabe_1 = new aufgabe("Aufgabe 1", "Ich erstelle eine Aufgabe", {Datum: "10.10.25", Uhrzeit: "24:00"}, "mittel", ["schritt 1", "schritt 2", "Schritt 3"]);
        neuesProjekt.aufgaben.push(aufgabe_1);
        const aufgabe_2 = new aufgabe("Aufgabe 2", "Ich erstelle eine zweite Aufgabe", {Datum: "10.10.25", Uhrzeit: "24:00"}, "niedrig", ["schritt 1", "schritt 2", "Schritt 3"]);
        neuesProjekt.aufgaben.push(aufgabe_2);
        const aufgabe_3 = new aufgabe("Aufgabe 3", "Ich erstelle eine dritte Aufgabe", {Datum: "10.10.25", Uhrzeit: "24:00"}, "hoch", ["schritt 1", "schritt 2", "Schritt 3"]);
        neuesProjekt.aufgaben.push(aufgabe_3);
    }

    static nutzerProjekteAusgeben(){
        console.log(nutzerProjekte);
    }
}