import React, {useState} from 'react';
import '../style/Form.scss'
import Profil from "../model/Profil";

function Form({profil, updateProfil}) {


    return <form id="form_group field" onSubmit={(event) => {
        event.preventDefault();
        const poids = parseFloat(event.target.poids.value)
        const mgBase = parseFloat(event.target.mgBase.value);
        const mgObj = parseFloat(event.target.mgObj.value);
        const perteHebdo = parseFloat(event.target.perteHebdo.value);

        updateProfil(new Profil(poids, mgBase, mgObj, perteHebdo, true));

        console.log(profil);
    }}>

        <div>
            <label htmlFor="poids">Poids (kg) : </label>
            <input className="form_field" type="number" name="poids" id="poids" step="0.1" min="0" placeholder=""/>
        </div>
        <div>
            <label htmlFor="mg">Masse grasse (%) :</label>
            <input type="number" name="mgBase" id="mg" step="0.1" min="0" placeholder=""/>
        </div>
        <div>
            <label htmlFor="mgobj">Objectif de masse grasse (%) : </label>
            <input type="number" name="mgObj" id="mgobj" step="0.1" min="0" placeholder=""/>
        </div>
        <div>
            <label htmlFor="perte">Objectif de perte hebdomadaire (kg) : </label>
            <input type="number" name="perteHebdo" id="perte" step="0.1" min="0" placeholder=""/>
        </div>

        <button type="submit">Calculer</button>
    </form>
}

export default Form;