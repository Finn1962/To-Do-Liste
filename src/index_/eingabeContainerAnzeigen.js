import {nutzerProjekte} from "../nutzerProjekte";

export class eingabeContainerAnzeigen {
    static overlay = document.getElementById("overlay")
    
    static projektEingabeContainerAnzeigen() {
        document.getElementById("eingabeContainerProjekte").style.visibility = "visible";
        overlay.style.visibility = "visible";        
    }

    static projektEingabeContainerVerbergen() {
        document.getElementById("warnmeldungProjekte").style.display = "none";
        document.getElementById("warnmeldungProjekte2").style.display = "none";
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

    static warnmeldungKeinProjekttitel() {
        document.getElementById("warnmeldungProjekte").style.display = "block";
    }

    static warnmeldungVergebenerProjekttitel() {
        document.getElementById("warnmeldungProjekte2").style.display = "block";
    }

    static aufgabenEingabeContainerAnzeigen() {
        document.getElementById("aufgabenÜbernehmenBtn").style.display = "none";
        document.getElementById("aufgabenSpeichernBtn").style.display = "block";
        document.getElementById("eingabeContainerAufgaben").style.visibility = "visible"
        overlay.style.visibility = "visible"; 
    }

    static aufgabenEingabeContainerVerbergen() {
        document.getElementById("warnmeldungAufgaben2").style.display = "none";
        document.getElementById("warnmeldungAufgaben").style.display = "none";
        document.getElementById("projektÜbernehmenBtn").style.display = "none";
        document.getElementById("eingabeContainerAufgaben").style.visibility = "hidden"
        document.getElementById("titel").value = "";
        document.getElementById("beschreibung").value = "";
        document.getElementById("priorität").value = "hoch"
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

    static warnmeldungKeinAufgabentitel() {
        document.getElementById("warnmeldungAufgaben").style.display = "block";
    }

    static warnmeldungVergebenerAufgabentitel() {
        document.getElementById("warnmeldungAufgaben2").style.display = "block";
    }

    static eingabeContainerLöschenÜberprüfungAnzeigenProjekte() {
        const text = document.getElementById("textEingabecontainer")
        text.textContent = "Das Projekt wirklich Löschen?";
        document.getElementById("jaBtn").style.display = "block"
        document.getElementById("jaBtn2").style.display = "none"
        document.getElementById("eingabeContainerLöschenÜberprüfung").style.visibility = "visible";
        overlay.style.visibility = "visible";        
    }

    static eingabeContainerLöschenÜberprüfungAnzeigenAufgaben() {
        const text = document.getElementById("textEingabecontainer")
        text.textContent = "Das Projekt wirklich Löschen?";
        document.getElementById("textEingabecontainer").textContent = "Die Aufgabe wirklich Löschen?";
        document.getElementById("jaBtn2").style.display = "block"
        document.getElementById("jaBtn").style.display = "none"
        document.getElementById("eingabeContainerLöschenÜberprüfung").style.visibility = "visible";
        overlay.style.visibility = "visible";        
    }

    static eingabeContainerLöschenÜberprüfungVerbergen() {
        document.getElementById("eingabeContainerLöschenÜberprüfung").style.visibility = "hidden";
        overlay.style.visibility = "hidden";        
    }
}