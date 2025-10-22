import "./css/basis.css"
import "./css/projektcontainer.css";
import {projekteUndAufgabenErstellen} from "./projekteUndAufgabenErstellen"
import {nachWichtigkeitSortieren} from "./nutzerProjekteSortieren"
import {domManipulation} from "./domManipulation"

document.getElementById("buttonHinzufügen").addEventListener("click", ()=> {
    projekteUndAufgabenErstellen.neuesProjekt();
    domManipulation.projekteInDomÜbernehmen();
});

window.addEventListener("keydown", (event)=> {
    if (event.key != "a") return;
    projekteUndAufgabenErstellen.neueAufgabe();
    nachWichtigkeitSortieren();
});

window.addEventListener("DOMContentLoaded", ()=> {
    projekteUndAufgabenErstellen.beispielprojekt();
    nachWichtigkeitSortieren();
    projekteUndAufgabenErstellen.nutzerProjekteAusgeben();
    domManipulation.projekteInDomÜbernehmen();

});