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
        this._perteHebdo = perteHebdo;
        // console.log(this);
    }


    //Méthodes

    /**
     * Calcule le poids après n semaines de perte
     * 
     * @param {*} n     Le nombre de semaines de sèche
     */
    getPoidsAfter(n) {

        if(n === 1) {
            return this._poidsDeBase - 1;
        } 
        return this._poidsDeBase - 1 - this._perteHebdo*(n-1);
    }

    /**
     * Calcule la masse grasse après n semaines de perte
     * 
     * @param {*} n     Le nombre de semaines de sèche
     */
    getMGAfter(n) {
        let mgKg = (this._mgBase/100)*this._poidsDeBase;

        //On multiplie par 4/5 car en moyenne, on peut s'attendre à perdre environ 200g de muscle par kilo perdu
        return (((mgKg- 0.8 - (4/5)* this._perteHebdo *(n-1))) / this.getPoidsAfter(n))*100;
        // return ((this._poidsDeBase - 0.8 - (4/5)* this._perteHebdo *(n-1)) / this.getPoidsAfter(n)) * 100;
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

            poids = this.getPoidsAfter(i);
            mg = this.getMGAfter(i);
            i++;
        }

        return {
            poids: poids,
            mg: mg,
            nbSemaines: i
        };

    }

}
module.exports = Profil