import '../style/Form.scss'
import Profil from "../model/Profil";
import {useState} from "react";
export default function Form({updateProfil }) {

    let [maxMg, updateMaxMg] = useState(100);

    let isResult = false;

    /**
     * Cette fonction a pour objectif de gérer le clic sur le bouton calculer.
     * Il faut d'abord vérifier que tous les formulaires soient valides avant de modifier le state.
     * De plus il faut afficher des messages d'erreur pour chaque formulaire
     * @param event     L'event triggered
     */
    const handle = function (event) {
        event.preventDefault();

        //On récupère les valaurs de chaque input
        const poids = parseFloat(event.target.poids.value);
        const mgBase = parseFloat(event.target.mgBase.value);
        const mgObj = parseFloat(event.target.mgObj.value);
        const perteHebdo = parseFloat(event.target.perteHebdo.value);


        //Au début les input ne sont pas en required pour ne pas mettre les input en rouge au lancement
        //Nous les passons à required quand on calcule pour la première fois
        [...event.target].forEach(input => {
            input.required = true;
            //De plus on empêche le résultat d'apparaitre
            if(input.validity.typeMismatch) {
                isResult = true;

            }

        });

        //Si toutes les données sont valides
        if(isResult) {
            //Alors on met le profil à jour
            updateProfil(new Profil(poids, mgBase, mgObj, perteHebdo, isResult));
        }

    }

    return <form id="form_group field" onSubmit={(event) => {
        handle(event);
    }}>
        <h2>Saisis tes mensurations</h2>
        <div>
            <input type="number" name="poids" id="poids" step="0.1" min="20" placeholder="Ex : 70"/>
            <label htmlFor="poids">Poids (kg) : </label>
            <p className="Error-message-form">Le poids doit être compris entre 20 et 500kg</p>
        </div>
        <div>
            <input type="number" name="mgBase" id="mg" step="0.1" min="5" max="70" placeholder="Ex : 20"
                onChange={(event) => {updateMaxMg(event.target.value);}} />
            <label htmlFor="mg">Masse grasse (%) :</label>
            <p className="Error-message-form">Le taux de masse grasse doit être compris entre 5% et 70%</p>
            <a href='' id="msg-mg" className="Message-explaination">Je ne connais pas mon taux de masse grasse </a>
        </div>
        <div>
            <input type="number" name="mgObj" id="mgobj" step="0.1" min="5" max={maxMg} placeholder="Ex : 12"/>
            <label htmlFor="mgobj">Objectif de masse grasse (%) : </label>
            <p className="Error-message-form">Le 'objectif de masse grasse doit être compris entre 5% et {maxMg}%</p>
        </div>
        <div>
            <input type="number" name="perteHebdo" id="perte" step="0.1" min="0.1" max="1.5" placeholder="Ex : 0.5"/>
            <label htmlFor="perte">Objectif de perte hebdomadaire (kg) : </label>
            <p className="Error-message-form">L'objectif de perte doit être compris entre 0.1kg et 1.5kg</p>
        </div>

        <button type="submit">Calculer</button>
    </form>

}

