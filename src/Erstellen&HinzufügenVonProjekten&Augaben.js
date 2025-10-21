import {projekt} from "./construktorProjekte"
import {aufgabe} from "./construktorAufgaben"
import {nutzerProjekte, projektHinzufügen} from "./nutzerProjekte"

export class neueProjekteUndAufgabenErstellen {
    
    static neuesProjekt(){
        const titel = prompt("Titel von neuem Projekt eingeben");
        const neuesProjekt = new projekt(titel);
        nutzerProjekte.push(neuesProjekt);
        console.log(nutzerProjekte);
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
        console.log(nutzerProjekte);
    }
}