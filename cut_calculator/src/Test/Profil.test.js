
const chai = require("chai");
const expect = chai.expect;
import Profil from '../model/Profil';

describe('Profil', function() {

    let profil;
        beforeEach(function() {
            profil = new Profil(100, 20, 15, 0.5);
        });

    describe("#getPoidsAfter", function() {
        
        it("Should calculate the right weight loss after n weeks", function() {
    
            let poids = profil.getPoidsAfter(5);
    
            let oracle = 97.0
            expect(poids).to.equal(oracle);
        });
    
    
    });

    describe("#getMGAfter", function() {
        
        it("Should calculate the right fat loss after n weeks", function() {
    
            let mg = profil.getMGAfter(5);
    
            let oracle = 18
            expect(Math.round(mg)).to.equal(oracle);
        });
    
    
    });
    
    describe('#simulate', function() {

        let res;
        beforeEach(function() {
            res = profil.simulate();
        });
       
        it("Should have the same fat percentage as in the objective", function() {
            const oracle = 15;
            expect(Math.round(res.mg)).to.equal(oracle);
        });

        it("Should calculate the correct number of weeks to get to the objective", function() {
            const oracle = 16;
            expect(res.nbSemaines).to.equal(oracle);
        });
    }); 
});

