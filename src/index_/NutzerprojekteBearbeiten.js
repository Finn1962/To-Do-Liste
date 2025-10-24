import {projekt} from "./construktoren/construktorProjekte"
import {aufgabe} from "./construktoren/construktorAufgaben"
import {nutzerProjekte} from "../nutzerProjekte"

export class nutzerProjekteBearbeiten {
    
    static neuesProjekt(){
        const neuesProjekt = new projekt(document.getElementById("eingabeFeldProjekte").value);
        nutzerProjekte.push(neuesProjekt);
    }

    static projektLöschen(titelProjekt){
        const indexProjekt = nutzerProjekte.findIndex(p => p.titel == titelProjekt);
        nutzerProjekte.splice(indexProjekt, 1);
    }

    static projektBearbeiten (titelProjekt){
        const eingabefeld = document.getElementById("eingabeFeldProjekte");
        const indexProjekt = nutzerProjekte.findIndex(p => p.titel == titelProjekt);
        nutzerProjekte[indexProjekt].titel = eingabefeld.value;
    }

    static neueAufgabe(){
        const titelProjekt = prompt("Projekt für die Aufgabe auswählen");
        const titel = prompt("Titel von neuer Aufgabe eingeben");
        const beschreibung = prompt("Beschreibung von neuer Aufgabe eingeben");
        const endtermin = {datum: prompt("Datum von Endtermin eingeben"), uhrzeit: prompt("Uhrzeit von Endtermin eingeben")};
        const priorität = prompt("priorität von neuer Aufgabe eingeben");
        const zwischenschritte = [];
        let zwischenschritt;
        while (true) {
            zwischenschritt = {titel: prompt("Zwischenschritte von neuer Aufgabe eingeben"), erledigt: false};
            if (zwischenschritt.titel == "") break;
            zwischenschritte.push(zwischenschritt);
        }
        const neueAufgabe = new aufgabe(titel, beschreibung, endtermin, priorität, zwischenschritte);
        const indexProjekt = nutzerProjekte.findIndex(p => p.titel == titelProjekt);
        nutzerProjekte[indexProjekt].aufgaben.push(neueAufgabe)
    }

    static aufgabenNachWichtigkeitSortieren(){
        const prioritätRang = {
            "hoch": 3,
            "mittel": 2,
            "niedrig": 1,
        }
        for (let i = 0; i < nutzerProjekte.length; i++){
            nutzerProjekte[i].aufgaben.sort((a, b) => prioritätRang[b.priorität] - prioritätRang[a.priorität]);
        }
    }
    
    static beispielprojektErstellen(){
        const neuesProjekt = new projekt("Mein Projekt");
        nutzerProjekte.push(neuesProjekt);
        const aufgabe_1 = new aufgabe("Aufgabe 1", "Ich erstelle eine Aufgabe", {datum: "10.10.25", uhrzeit: "24:00"}, "mittel", ["schritt 1", "schritt 2", "Schritt 3"]);
        neuesProjekt.aufgaben.push(aufgabe_1);
        const aufgabe_2 = new aufgabe("Aufgabe 2", "Ich erstelle eine zweite Aufgabe", {datum: "10.10.25", uhrzeit: "24:00"}, "niedrig", ["schritt 1", "schritt 2", "Schritt 3"]);
        neuesProjekt.aufgaben.push(aufgabe_2);
        const aufgabe_3 = new aufgabe("Aufgabe 3", "Ich erstelle eine dritte Aufgabe", {datum: "10.10.25", uhrzeit: "24:00"}, "hoch", ["schritt 1", "schritt 2", "Schritt 3"]);
        neuesProjekt.aufgaben.push(aufgabe_3);
    }

    static nutzerProjekteConsolenAusgabe(){
        console.log(nutzerProjekte);
    }
}