import {projekt} from "./construktoren/construktorProjekte"
import {aufgabe} from "./construktoren/construktorAufgaben"
import {nutzerProjekte} from "../nutzerProjekte"

export class nutzerProjekteBearbeiten {
    
    static neuesProjekt(){
        const neuesProjekt = new projekt(document.getElementById("eingabeFeldProjekte").value);
        nutzerProjekte.push(neuesProjekt);
    }

    static projektBearbeiten (titelProjekt){
        const eingabefeld = document.getElementById("eingabeFeldProjekte");
        const projekt = nutzerProjekte.find(p => p.titel == titelProjekt);
        projekt.titel = eingabefeld.value;
    }

    static projektLöschen(titelProjekt){
        const indexProjekt = nutzerProjekte.findIndex(p => p.titel == titelProjekt);
        nutzerProjekte.splice(indexProjekt, 1);
    }

    static neueAufgabe(titelProjekt){
        const Projekttitel = titelProjekt;
        const titel = document.getElementById("titel").value;
        const beschreibung = document.getElementById("beschreibung").value;
        const datum = document.getElementById("datum").value
        const uhrzeit = document.getElementById("uhrzeit").value;
        const endtermin = {datum: datum, uhrzeit: uhrzeit};
        const priorität = document.getElementById("priorität").value;
        const neueAufgabe = new aufgabe(titel, beschreibung, endtermin, priorität);
        const projekt = nutzerProjekte.find(p => p.titel == Projekttitel);
        projekt.aufgaben.push(neueAufgabe)
    }
    
    static aufgabeBearbeiten(titelAufgabe, titelProjekt){
        const projekt = nutzerProjekte.find(p => p.titel == titelProjekt);
        const aufgabe = projekt.aufgaben.find(a => a.titel == titelAufgabe);
        aufgabe.titel = document.getElementById("titel").value
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
        const aufgabe_1 = new aufgabe("Aufgabe 1", "Ich erstelle eine Aufgabe", {datum: '2000-02-12', uhrzeit: '00:00'}, "mittel");
        neuesProjekt.aufgaben.push(aufgabe_1);
        const aufgabe_2 = new aufgabe("Aufgabe 2", "Ich erstelle eine zweite Aufgabe", {datum: '2000-02-12', uhrzeit: '00:00'}, "niedrig");
        neuesProjekt.aufgaben.push(aufgabe_2);
        const aufgabe_3 = new aufgabe("Aufgabe 3", "Ich erstelle eine dritte Aufgabe", {datum: '2000-02-12', uhrzeit: '00:00'}, "hoch");
        neuesProjekt.aufgaben.push(aufgabe_3);
    }

    static nutzerProjekteConsolenAusgabe(){
        console.log(nutzerProjekte);
    }
}