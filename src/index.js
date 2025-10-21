import "./styles.css";
import {projekteUndAufgabenErstellen} from "./projekteUndAufgabenErstellen"
import {nachWichtigkeitSortieren} from "./nutzerProjekteSortieren"


window.addEventListener("keydown", (event)=> {
    if (event.key != "p") return;
    projekteUndAufgabenErstellen.neuesProjekt();
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
});