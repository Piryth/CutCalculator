class Profil {

    //Attributs
    _poidsDeBase;
    _mgBase;
    _mbObj;
    _perteHebdo;

    //Constructeurs
    constructor(poidsDeBase, mgBase, mgObj, perteHebdo) {
        this._poidsDeBase = poidsDeBase;
        this._mgBase = mgBase;
        this._mbObj = mgObj;
        rhis._perteHebdo = perteHebdo;
    }


    //Méthodes

    /**
     * Calcule le poids après n semaines de perte
     * 
     * @param {*} n     Le nombre de semaines de sèche
     */
    getPoidsAfter(n) {
        return this._poidsDeBase - this._perteHebdo*n;
    }

    /**
     * Calcule la masse grasse après n semaines de perte
     * 
     * @param {*} n     Le nombre de semaines de sèche
     */
    getMGAfter(n) {
        //On multiplie par 4/5 car en moyenne, on peut s'attendre à perdre environ 200g de muscle par kilo perdu
        return 
            ((this._poidsDeBase - (4/5)* this._perteHebdo *n) / this.getPoidsAfter(n)) * 100;
    }

    /**
     * Calcule le poids de la semaine suivante en fonction du poids
     * 
     * @param {*} poids     Le poids
     * @returns             Le poids de la semaine suivante
     */
    getPoidsSemaineSuivante(poids) {
        return poids - this.perteHebdo;
    }

    /**
     * Calcule la MG de la semaine suivante en fonction du poids
     * 
     * @param {*} poids     Le poids
     * @returns             La MG de la semaine suivante
     */
    getMGSemaineSuivante(poids) {
        return mg - ((poids - (4/5)* this._perteHebdo) / this.getPoidsSemaineSuivante(poids)) * 100;
    }


    /**
     * Simule une période de sèche et renvoie après combien de semaines de sèche l'objectif est atteint
     * 
     * @returns     Un objet JSON contenant le poids final, la MG finale et le nombre de semaines
     */
    simulate() {
        let poids = this._poidsDeBase;
        let mg = this._mgBase;
        let i = 0
        while(mg > this._mbObj) {

            poids = this.getPoidsSemaineSuivante(poids);
            mg = this.getMGSemaineSuivante(poids);
            i++;
        }

        return {
            poids: poids,
            mg: mg,
            nbSemaines: i
        };

    }


    
}