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

    simulate() {
        let poids = this._poidsDeBase;
        let mg = this._mgBase;
        let i = 0;
        while(mg > this._mgObjectif) {
            console.log(mg);
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

    get isResult() {
        return this._isResult;
    }
}
module.exports = Profil