class Profil {
    _poidsDeBase;
    _mgBase;
    _mgObjectif;
    _perteHebdo;
    _isResult;


    constructor(poidsDeBase, mgBase, mgObjectif, perteHebdo, isResult) {
        this._poidsDeBase = poidsDeBase;
        this._mgBase = mgBase;
        this._mgObjectif = mgObjectif;
        this._perteHebdo = perteHebdo;
        this._isResult = isResult;
    }

    getPoidsAfter(n) {

        if(n === 1) {
            return this._poidsDeBase - 1
        }
        return this._poidsDeBase - 1 - this._perteHebdo*(n-1)

    }

    /**
     * Calcule la masse grasse après n semaines de perte
     *
     * @param {*} n     Le nombre de semaines de sèche
     */
    getMGAfter(n) {
        let mgKg = (this._mgBase/100)*this._poidsDeBase;
        //On multiplie par 4/5 car en moyenne, on peut s'attendre à perdre environ 200g de muscle par kilo perdu
        return (((mgKg- 0.8 - (4/5)* this._perteHebdo *(n-1))) / this.getPoidsAfter(n))*100
    }

    //Simule une période de sèche. A chaque semaine, le nouveau poids et la nouvelle masse grasse
    //est calculée, et enregistrée
    simulate() {
        //Données
        let dataPoids = []
        let dataMg = []

        let poids = this._poidsDeBase;
        let mg = this._mgBase;
        let i = 0;
        while(mg > this._mgObjectif) {

            dataPoids.push({x:poids, semaine: i })
            dataMg.push({x: mg, semaine: i});
            poids = this.getPoidsAfter(i);
            mg = this.getMGAfter(i);
            i++;
        }
        return {
            poids: poids,
            mg: mg,
            nbSemaines: i,
            dataPoids: dataPoids,
            dataMg: dataMg
        };

    }

    get isResult() {
        return this._isResult;
    }

    set isResult(isResult) {
        this._isResult = isResult;
    }
}
module.exports = Profil