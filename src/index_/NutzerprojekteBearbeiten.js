import {projekt} from "./construktoren/construktorProjekte"
import {aufgabe} from "./construktoren/construktorAufgaben"
import {nutzerProjekte} from "../nutzerProjekte"

export class nutzerProjekteBearbeiten {
    
    static neuesProjekt(){
        const titel = document.getElementById("eingabeFeldProjekte").value;
        if (titel == "") {
            return "keinTitel";
        };
        if(nutzerProjekte.titel) {
            const titelExtistiert = nutzerProjekte.some(p => p.titel == titel)
            if (titelExtistiert) {
                return "titelVergeben";
            };
        };
        const neuesProjekt = new projekt(titel);
        nutzerProjekte.push(neuesProjekt);
    }

    static projektBearbeiten (titelProjekt){
        const titel = document.getElementById("eingabeFeldProjekte").value;
        if (titel == "") {
            return "keinTitel";
        };
        const titelExtistiert = nutzerProjekte.some(p => p.titel == titel && p.titel !== titelProjekt)
        if (titelExtistiert) {
            return "titelVergeben";
        };
        const projekt = nutzerProjekte.find(p => p.titel == titelProjekt);
        projekt.titel = titel;
    }

    static projektLöschen(titelProjekt){
        const indexProjekt = nutzerProjekte.findIndex(p => p.titel == titelProjekt);
        nutzerProjekte.splice(indexProjekt, 1);
    }

    static neueAufgabe(titelProjekt){
        const projekttitel = titelProjekt;
        const projekt = nutzerProjekte.find(p => p.titel == projekttitel);
        const titel = document.getElementById("titel").value;
        if (titel == "") {
            return "keinTitel";
        };
        const titelExtistiert = projekt.aufgaben.some(a => a.titel == titel)
        if (titelExtistiert) {
            return "titelVergeben";
        };
        const beschreibung = document.getElementById("beschreibung").value;
        const datum = document.getElementById("datum").value
        const uhrzeit = document.getElementById("uhrzeit").value;
        const endtermin = {datum: datum, uhrzeit: uhrzeit};
        const priorität = document.getElementById("priorität").value;
        const neueAufgabe = new aufgabe(titel, beschreibung, endtermin, priorität);
        projekt.aufgaben.push(neueAufgabe)
    }
    
    static aufgabeBearbeiten(titelAufgabe, titelProjekt){
        const projekt = nutzerProjekte.find(p => p.titel == titelProjekt);
        const aufgabe = projekt.aufgaben.find(a => a.titel == titelAufgabe);
        const titel = document.getElementById("titel").value;
        if (titel == "") {
            return "keinTitel";
        };
        const titelExtistiert = projekt.aufgaben.some(a => a.titel == titel && a.titel !== titelAufgabe)
        if (titelExtistiert) {
            return "titelVergeben";
        };
        aufgabe.titel = titel;
        aufgabe.beschreibung = document.getElementById("beschreibung").value
        aufgabe.endtermin.datum = document.getElementById("datum").value
        aufgabe.endtermin.uhrzeit = document.getElementById("uhrzeit").value
        aufgabe.priorität = document.getElementById("priorität").value
    }

    static aufgabeLöschen(titelAufgabe, titelProjekt){
        const projekt = nutzerProjekte.find(p => p.titel == titelProjekt);
        const indexAufgabe = projekt.aufgaben.findIndex(a => a.titel == titelAufgabe);
        projekt.aufgaben.splice(indexAufgabe, 1);
    }

    static aufgabenStatusÄndern(titelAufgabe, titelProjekt) {
        const projekt = nutzerProjekte.find(p => p.titel == titelProjekt);
        const aufgabe = projekt.aufgaben.find(a => a.titel == titelAufgabe);
        if (aufgabe.erledigt) {
            aufgabe.erledigt = false;
        } else {
            aufgabe.erledigt = true;
        }
    }

    static aufgabenHöheÄndern(titelAufgabe, titelProjekt) {
        const projekt = nutzerProjekte.find(p => p.titel == titelProjekt);
        const aufgabe = projekt.aufgaben.find(a => a.titel == titelAufgabe);
        if (aufgabe.aufgeklappt) {
            aufgabe.aufgeklappt = false;
        } else {
            aufgabe.aufgeklappt = true;
        }
    }

    static aufgabenNachWichtigkeitSortieren(){
        const prioritätRang = {
            "Hoch": 3,
            "Mittel": 2,
            "Niedrig": 1,
        }
        for (let i = 0; i < nutzerProjekte.length; i++){
            nutzerProjekte[i].aufgaben.sort((a, b) => prioritätRang[b.priorität] - prioritätRang[a.priorität]);
        }
    }
    
    static beispielprojektErstellen(){
        const neuesProjekt = new projekt("Mein Beispielprojekt");
        nutzerProjekte.push(neuesProjekt);
        const aufgabe_1 = new aufgabe("Aufgabe 1", "Ich muss etwas erledigen.", {datum: '2026-02-12', uhrzeit: '12:00'}, "Hoch");
        neuesProjekt.aufgaben.push(aufgabe_1);
        const aufgabe_2 = new aufgabe("Aufgabe 2", "Ich muss etwas erledigen.", {datum: '2026-05-04', uhrzeit: '15:30'}, "Mittel");
        neuesProjekt.aufgaben.push(aufgabe_2);
        const aufgabe_3 = new aufgabe("Aufgabe 3", "Ich muss etwas erledigen.", {datum: '2026-10-20', uhrzeit: '18:00'}, "Niedrig");
        neuesProjekt.aufgaben.push(aufgabe_3);
    }

    static nutzerProjekteConsolenAusgabe(){
        console.log(nutzerProjekte);
    }
}