import {nutzerProjekte} from "../nutzerProjekte";

export class eingabeContainerAnzeigen {
    static overlay = document.getElementById("overlay")
    
    static projektEingabeContainerAnzeigen() {
        document.getElementById("eingabeContainerProjekte").style.visibility = "visible";
        overlay.style.visibility = "visible";        
    }

    static projektEingabeContainerVerbergen() {
        document.getElementById("eingabeFeldProjekte").value = "";
        document.getElementById("projektÜbernehmenBtn").style.display = "none";
        document.getElementById("projektSpeichernBtn").style.display = "block";
        document.getElementById("eingabeContainerProjekte").style.visibility = "hidden";
        overlay.style.visibility = "hidden";        
    }

    static projektBearbeitenContainerAnzeigen(buchTitel) {
        document.getElementById("eingabeFeldProjekte").value = buchTitel;
        document.getElementById("projektÜbernehmenBtn").style.display = "block";
        document.getElementById("projektSpeichernBtn").style.display = "none";
        document.getElementById("eingabeContainerProjekte").style.visibility = "visible";
        overlay.style.visibility = "visible";        
    }

    static aufgabenEingabeContainerAnzeigen() {
        document.getElementById("eingabeContainerAufgaben").style.visibility = "visible"
        overlay.style.visibility = "visible"; 
    }

    static aufgabenEingabeContainerVerbergen() {
        document.getElementById("projektÜbernehmenBtn").style.display = "none";
        document.getElementById("eingabeContainerAufgaben").style.visibility = "hidden"
        document.getElementById("titel").value = "";
        document.getElementById("beschreibung").value = "";
        document.getElementById("priorität").value = "";
        document.getElementById("datum").value = "";
        document.getElementById("uhrzeit").value = "";
        overlay.style.visibility = "hidden"; 
    }

    static aufgabenBearbeitenContainerAnzeigen(titelAufgabe, aktivesProjekt) {
        const projekt = nutzerProjekte.find(p => p.titel == aktivesProjekt);
        const aufgabe = projekt.aufgaben.find(a => a.titel == titelAufgabe);
        document.getElementById("titel").value = aufgabe.titel;
        document.getElementById("beschreibung").value = aufgabe.beschreibung;
        document.getElementById("priorität").value = aufgabe.priorität;
        document.getElementById("datum").value = aufgabe.endtermin.datum;
        document.getElementById("uhrzeit").value = aufgabe.endtermin.uhrzeit;
        document.getElementById("aufgabenÜbernehmenBtn").style.display = "block";
        document.getElementById("aufgabenSpeichernBtn").style.display = "none";
        document.getElementById("eingabeContainerAufgaben").style.visibility = "visible";
        overlay.style.visibility = "visible"; 
    }

    static eingabeContainerLöschenÜberprüfungAnzeigen() {
        document.getElementById("eingabeContainerLöschenÜberprüfung").style.visibility = "visible";
        overlay.style.visibility = "visible";        
    }

    static eingabeContainerLöschenÜberprüfungVerbergen() {
        document.getElementById("eingabeContainerLöschenÜberprüfung").style.visibility = "hidden";
        overlay.style.visibility = "hidden";        
    }
}