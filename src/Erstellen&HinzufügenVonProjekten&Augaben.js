import {projekt} from "./construktorProjekte"
import {nutzerProjekte, projektHinzufügen} from "./nutzerProjekte"

export class neueProjekteUndAufgabenErstellen {
    static neuesProjekt(){
        const titel = prompt("Titel von neuem Projekt eingeben");
        const neuesProjekt = new projekt(titel);
        projektHinzufügen(neuesProjekt);
        console.log(nutzerProjekte);
    }
}