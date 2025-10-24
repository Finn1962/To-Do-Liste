import "./css/basis.css"
import "./css/projektcontainer.css";
import "./css/aufgabenContainer.css"
import "./css/eingabeContainerProjekte.css"
import "./css/overlay.css"
import "./css/eingabeContainerLöschenÜberprüfung.css"
import {nutzerProjekteBearbeiten} from "./index_/NutzerprojekteBearbeiten"
import {eingabeContainerAnzeigen} from "./index_/eingabeContainerAnzeigen"
import {domManipulation} from "./index_/domManipulation"

let titelProjekt;

//Eventlistener Eingabefläche Projekte//////////////////////////////////////////////

//Eingabefläche für neues Projekt anzeigen bei click
document.getElementById("buttonHinzufügen").addEventListener("click", ()=> {
    eingabeContainerAnzeigen.projektEingabeContainerAnzeigen();
});

//Neues Projekt erstellen bei click auf Speichern Button
document.getElementById("projektSpeichernBtn").addEventListener("click", ()=> {
    nutzerProjekteBearbeiten.neuesProjekt();
    domManipulation.projekteInDomÜbernehmen();
    eingabeContainerAnzeigen.projektEingabeContainerVerbergen();
});

//Eingabefläche verbergen bei click auf Abbrechenbutton
document.getElementById("projektAbbrechenBtn").addEventListener("click", ()=> {
    eingabeContainerAnzeigen.projektEingabeContainerVerbergen();
});


//Projekte Bearbeiten//////////////////////////////////////////////

document.addEventListener("buttonBearbeitenGeklickt", (event) => {
    eingabeContainerAnzeigen.projektBearbeitenContainerAnzeigen(event.detail);
    titelProjekt = event.detail;
});

document.getElementById("projektÜbernehmenBtn").addEventListener("click", () => {
    nutzerProjekteBearbeiten.projektBearbeiten(titelProjekt);
    eingabeContainerAnzeigen.projektEingabeContainerVerbergen();
    domManipulation.projekteInDomÜbernehmen();
});




//Projekte Löschen//////////////////////////////////////////////

//Eingabefläche Eingabefläche für Löschenüberprüfung Anzeigen
document.addEventListener("buttonLöschenGeklickt", (event) => {
    eingabeContainerAnzeigen.eingabeContainerLöschenÜberprüfungAnzeigen()
    titelProjekt = event.detail;
});

//Projekt Löschen bei click auf ja Button
document.getElementById("jaBtn").addEventListener("click", () => {
    nutzerProjekteBearbeiten.projektLöschen(titelProjekt);
    domManipulation.projekteInDomÜbernehmen();
    eingabeContainerAnzeigen.eingabeContainerLöschenÜberprüfungVerbergen()
});

//Abbrechen bei click auf nein Button
document.getElementById("neinBtn").addEventListener("click", () => {
    eingabeContainerAnzeigen.eingabeContainerLöschenÜberprüfungVerbergen()
});










//Beispielprojekt//////////////////////////////////////////////

//Beispiel projekt erstellen beim Laden der Seite
document.addEventListener("DOMContentLoaded", ()=> {
    nutzerProjekteBearbeiten.beispielprojektErstellen();
    nutzerProjekteBearbeiten.aufgabenNachWichtigkeitSortieren();
    nutzerProjekteBearbeiten.nutzerProjekteConsolenAusgabe();
    domManipulation.projekteInDomÜbernehmen();
});


/*window.addEventListener("keydown", (event)=> {
    if (event.key != "a") return;
    nutzerProjekteBearbeiten.neueAufgabe();
    nutzerProjekteBearbeiten.aufgabenNachWichtigkeitSortieren();
});*/