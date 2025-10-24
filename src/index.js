import "./css/basis.css"
import "./css/projektcontainer.css";
import "./css/aufgabenContainer.css"
import "./css/eingabeContainerProjekte.css"
import "./css/overlay.css"
import {nutzerProjekteBearbeiten} from "./indexUntermodule/NutzerprojekteBearbeiten"
import {eingabeContainerAnzeigen} from "./indexUntermodule/eingabeContainerAnzeigen"

document.getElementById("buttonHinzufügen").addEventListener("click", ()=> {
    eingabeContainerAnzeigen.projektEingabeContainerAnzeigen();
});

document.getElementById("projektAbbrechenBtn").addEventListener("click", ()=> {
    eingabeContainerAnzeigen.projektEingabeContainerVerbergen();
});

document.getElementById("projektSpeichernBtn").addEventListener("click", ()=> {
    nutzerProjekteBearbeiten.neuesProjekt();
    eingabeContainerAnzeigen.projektEingabeContainerVerbergen();
});

window.addEventListener("keydown", (event)=> {
    if (event.key != "a") return;
    nutzerProjekteBearbeiten.neueAufgabe();
    nutzerProjekteBearbeiten.nachWichtigkeitSortieren();
});

window.addEventListener("DOMContentLoaded", ()=> {
    nutzerProjekteBearbeiten.beispielprojekt();
    nutzerProjekteBearbeiten.nachWichtigkeitSortieren();
    nutzerProjekteBearbeiten.nutzerProjekteConsolenAusgabe();
});