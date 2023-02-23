import Profil from "../model/Profil";
import '../style/Form.css'
import { useState } from "react";

function Form({isResult, updateIsResult},{profil, updateProfil}) {



    return <form id="form_group field" onSubmit={(event) => {
        event.preventDefault();

                const poids = parseInt(event.target.poids.value);
                const tempProfil = new Profil(poids,poids,poids,poids)
                console.log(poids);
                updateProfil(tempProfil)
                updateIsResult(true);
                console.log(tempProfil);
                console.log(profil);
                 }}>
        

        <label htmlFor="poids">Poids (kg) : </label>
        <input className="form_field" type="number" name="poids" id="poids" step="0.1" min="0" placeholder="" />

    
        <label htmlFor="mg">Masse grasse (%) :</label> 
        <input type="number" name="massegrasse" id="mg" step="0.1" min="0" placeholder="" />

        
        <label htmlFor="mgobj">Objectif de masse grasse (%) : </label> 
        <input type="number" name="massegrasseobjectif" id="mgobj" step="0.1" min="0" placeholder=""/>

        <label htmlFor="perte">Objectif de perte hebdomadaire (kg) : </label> 
        <input type="number" name="pertehebdo" id="perte" step="0.1" min="0" placeholder="" />
 
        <button type="submit">Calculer</button>
    </form>
}

export default Form;