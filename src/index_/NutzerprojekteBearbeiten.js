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

    static neueAufgabe(titelProjekt){
        const Projekttitel = titelProjekt;
        const titel = document.getElementById("titel").value;
        const beschreibung = document.getElementById("beschreibung").value;
        const endtermin = {datum: document.getElementById("datum").value, uhrzeit: document.getElementById("uhrzeit").value};
        const priorität = document.getElementById("priorität").value;
        const zwischenschritte = [document.getElementById("zwischenschritte").value];
        /*let zwischenschritt;
        while (true) {
            zwischenschritt = {titel: prompt("Zwischenschritte von neuer Aufgabe eingeben"), erledigt: false};
            if (zwischenschritt.titel == "") break;
            zwischenschritte.push(zwischenschritt);
        }*/
        const neueAufgabe = new aufgabe(titel, beschreibung, endtermin, priorität, zwischenschritte);
        console.log(neueAufgabe)
        const indexProjekt = nutzerProjekte.findIndex(p => p.titel == Projekttitel);
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
        const aufgabe_1 = new aufgabe("Aufgabe 1", "Ich erstelle eine Aufgabe", {datum: "10-10-25", uhrzeit: "24:00"}, "mittel", ["schritt 1", "schritt 2", "Schritt 3"]);
        neuesProjekt.aufgaben.push(aufgabe_1);
        const aufgabe_2 = new aufgabe("Aufgabe 2", "Ich erstelle eine zweite Aufgabe", {datum: "10-10-25", uhrzeit: "24:00"}, "niedrig", ["schritt 1", "schritt 2", "Schritt 3"]);
        neuesProjekt.aufgaben.push(aufgabe_2);
        const aufgabe_3 = new aufgabe("Aufgabe 3", "Ich erstelle eine dritte Aufgabe", {datum: "10-10-25", uhrzeit: "24:00"}, "hoch", ["schritt 1", "schritt 2", "Schritt 3"]);
        neuesProjekt.aufgaben.push(aufgabe_3);
    }

    static nutzerProjekteConsolenAusgabe(){
        console.log(nutzerProjekte);
    }
}