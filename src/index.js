import "./styles.css";
import {neueProjekteUndAufgabenErstellen} from "./Erstellen&HinzufügenVonProjekten&Augaben"

window.addEventListener("keydown", (event)=> {
    if (!event.key === "p") return;
    neueProjekteUndAufgabenErstellen.neuesProjekt();
});