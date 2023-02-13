import { useState } from "react";
import Profil from "../model/Profil";

function Form() {
    const[profil, updateProfil] = useState(new Profil());

    const handleSubmit = (event) => {
        event.preventDefault();
        let poids = parseFloat( event.target.poids.value);
        let mgbase =  parseFloat(event.target.massegrasse.value);
        let mgObj = parseFloat(event.target.massegrasseobjectif.value);
        let perteHebdo = parseFloat(event.target.pertehebdo.value);

        updateProfil(new Profil(poids, mgbase, mgObj, perteHebdo));
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="poids">Poids (kg) : </label> 
            <input type="number" name="poids" id="poids" step="0.1" min="0" />
        </div>

        <div>
            <label htmlFor="mg">Masse grasse (%) : </label> 
            <input type="number" name="massegrasse" id="mg" step="0.1" min="0" />
        </div>

        <div>
            <label htmlFor="mg">Objectif de masse grasse (%) : </label> 
            <input type="number" name="massegrasseobjectif" id="mg" step="0.1" min="0" />
        </div>

        <div>
            <label htmlFor="mg">Objectif de perte hebdomadaire (kg) : </label> 
            <input type="number" name="pertehebdo" id="mg" step="0.1" min="0" />
        </div>

        <div>
            <button type="submit">Calculer</button>
        </div>

    </form>
}

export default Form;