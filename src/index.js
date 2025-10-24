import "./css/basis.css"
import "./css/projektcontainer.css";
import "./css/aufgabenContainer.css"
import "./css/eingabeContainerProjekte.css"
import "./css/overlay.css"
import "./css/eingabeContainerLöschenÜberprüfung.css"
import "./css/eingabeContainerAufgaben.css"
import {nutzerProjekteBearbeiten} from "./index_/nutzerprojekteBearbeiten"
import {eingabeContainerAnzeigen} from "./index_/eingabeContainerAnzeigen"
import {domManipulation} from "./index_/domManipulation"

let titelProjekt;
let titelAufgabe;



//Eventlistener Eingabefläche Projekte//////////////////////////////////////////////

//Eingabefläche für neues Projekt anzeigen bei click
document.getElementById("buttonProjektHinzufügen").addEventListener("click", ()=> {
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

//Eingabefläche Eingabefläche für Bearbeiten Anzeigen
document.addEventListener("buttonProjektBearbeitenGeklickt", (event) => {
    eingabeContainerAnzeigen.projektBearbeitenContainerAnzeigen(event.detail);
    titelProjekt = event.detail;
});

//Projekt Bearbeiten bei click auf Übernehmen Button
document.getElementById("projektÜbernehmenBtn").addEventListener("click", () => {
    nutzerProjekteBearbeiten.projektBearbeiten(titelProjekt);
    eingabeContainerAnzeigen.projektEingabeContainerVerbergen();
    domManipulation.projekteInDomÜbernehmen();
});



//Projekte Löschen//////////////////////////////////////////////

//Eingabefläche Eingabefläche für Löschenüberprüfung Anzeigen
document.addEventListener("buttonProjektLöschenGeklickt", (event) => {
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



//Eventlistener Eingabefläche Aufgaben//////////////////////////////////////////////

//Eingabefläche Eingabefläche für Aufgaben Anzeigen
document.getElementById("buttonAufgabenHinzufügen").addEventListener("click", ()=>{
    eingabeContainerAnzeigen.aufgabenEingabeContainerAnzeigen();
});

//Neue Aufgabe erstellen bei click auf Button
document.getElementById("aufgabenSpeichernBtn").addEventListener("click", ()=>{
    
});

//Eingabefläche verbergen bei click auf Abbrechenbutton
document.getElementById("aufgabenAbbrechenBtn").addEventListener("click", ()=>{
    eingabeContainerAnzeigen.aufgabenEingabeContainerVerbergen();
});

//Eingabefläche Eingabefläche für Aufgaben bearbeiten Anzeigen
document.addEventListener("buttonAufgabeBearbeitenGeklickt", (event) => {
    console.log(event.detail);
    titelAufgabe = event.detail;
});

//Eingabefläche Eingabefläche für Aufgaben löschenüberprüfung Anzeigen
document.addEventListener("buttonAufgabeLöschenGeklickt", (event) => {
    console.log(event.detail);
    titelAufgabe = event.detail;
});









//Beispielprojekt Laden//////////////////////////////////////////////

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