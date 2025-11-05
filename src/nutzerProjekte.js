export const nutzerProjekte = [];

export class speicher {

    static speichern() {
        localStorage.setItem("speicherstand", JSON.stringify(nutzerProjekte));
    };

    static laden() {
        const gespeicherteDaten = localStorage.getItem("speicherstand");
        if (gespeicherteDaten) {
            const array = JSON.parse(gespeicherteDaten);
            nutzerProjekte.splice(0, nutzerProjekte.length, ...array);
            return true
        }
        return false
    };
};