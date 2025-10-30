import "./css/basis.css"
import "./css/projektcontainer.css";
import "./css/aufgabenContainer.css"
import "./css/eingabeContainerProjekte.css"
import "./css/overlay.css"
import "./css/eingabeContainerLöschenÜberprüfung.css"
import "./css/eingabeContainerAufgaben.css"
import "./css/header.css"
import {nutzerProjekteBearbeiten} from "./index_/nutzerprojekteBearbeiten"
import {eingabeContainerAnzeigen} from "./index_/eingabeContainerAnzeigen"
import {domManipulation} from "./index_/domManipulation"

let titelProjekt;
let titelAufgabe;


//Augaben anzeigen bei Klick auf Projektbutton
document.addEventListener("buttonAufgabenAnzeigenGeklickt", (event)=> {
    domManipulation.aufgabenInDomÜbernehmen(event.detail)
    titelProjekt = event.detail;
});




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


//Projekte Bearbeiten

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


//Projekte Löschen

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
    domManipulation.aufgabenAusDomEntfernen();
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

//Neue Aufgabe erstellen bei click auf Speichernbutton
document.getElementById("aufgabenSpeichernBtn").addEventListener("click", ()=>{
    nutzerProjekteBearbeiten.neueAufgabe(titelProjekt);
    nutzerProjekteBearbeiten.aufgabenNachWichtigkeitSortieren();
    domManipulation.aufgabenInDomÜbernehmen(titelProjekt);
    eingabeContainerAnzeigen.aufgabenEingabeContainerVerbergen();
});

//Eingabefläche verbergen bei click auf Abbrechenbutton
document.getElementById("aufgabenAbbrechenBtn").addEventListener("click", ()=>{
    eingabeContainerAnzeigen.aufgabenEingabeContainerVerbergen();
});


//Aufgaben Bearbeiten

//Eingabefläche Eingabefläche für Aufgaben bearbeiten Anzeigen
document.addEventListener("buttonAufgabeBearbeitenGeklickt", (event) => {
    titelAufgabe = event.detail;
    eingabeContainerAnzeigen.aufgabenBearbeitenContainerAnzeigen(titelAufgabe, titelProjekt);   
});

//Projekt Bearbeiten bei click auf Übernehmen Button
document.getElementById("aufgabenÜbernehmenBtn").addEventListener("click", ()=>{
    nutzerProjekteBearbeiten.aufgabeBearbeiten(titelAufgabe, titelProjekt);
    eingabeContainerAnzeigen.aufgabenEingabeContainerVerbergen();
    nutzerProjekteBearbeiten.aufgabenNachWichtigkeitSortieren();
    domManipulation.aufgabenInDomÜbernehmen(titelProjekt);
});

//Aufgaben Löschen

//Aufgabe Löschen bei Click auf Button
document.addEventListener("buttonAufgabeLöschenGeklickt", (event) => {
    titelAufgabe = event.detail;
    nutzerProjekteBearbeiten.aufgabeLöschen(titelAufgabe, titelProjekt);
    domManipulation.aufgabenInDomÜbernehmen(titelProjekt);
});




//Eventlistener Aufgabenstatus//////////////////////////////////////////////

//Aufgabenstatus bei Click ändern
document.addEventListener("buttonAufgabenstatusGecklickt", (event) => {
    titelAufgabe = event.detail.titel;
    let id = event.detail.id
    domManipulation.aufgabenStatusÄndern(titelAufgabe, titelProjekt, id);
    nutzerProjekteBearbeiten.aufgabenStatusÄndern(titelAufgabe, titelProjekt);
});




//Eventlistener Aufgabengröße ändern

//Aufgaben werden bei click vergrößert oder verkleinert
document.addEventListener("buttonAufgabNeuSkalierenGeklickt", (event) => {
    titelAufgabe = event.detail.titel;
    let idButton = event.detail.ids.idButton;
    let idAufgabe = event.detail.ids.idAufgabe;
    domManipulation.aufgabenHöheÄndern(titelAufgabe, titelProjekt, idButton, idAufgabe);
    nutzerProjekteBearbeiten.aufgabenHöheÄndern(titelAufgabe, titelProjekt);
});




//Beispielprojekt Laden

//Beispiel projekt erstellen beim Laden der Seite
document.addEventListener("DOMContentLoaded", ()=> {
    nutzerProjekteBearbeiten.beispielprojektErstellen();
    nutzerProjekteBearbeiten.aufgabenNachWichtigkeitSortieren();
    nutzerProjekteBearbeiten.nutzerProjekteConsolenAusgabe();
    domManipulation.projekteInDomÜbernehmen();
});