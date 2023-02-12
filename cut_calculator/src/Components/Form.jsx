
function Form() {

    return <form action="">
        <div>
            <label htmlFor="poids">Poids (kg) : </label> 
            <input type="number" name="Nom" id="poids" step="0.1" min="0" />
        </div>

        <div>
            <label htmlFor="mg">Masse grasse (%) : </label> 
            <input type="number" name="Masse Grasse" id="mg" step="0.1" min="0" />
        </div>

        <div>
            <label htmlFor="mg">Objectif de masse grasse (%) : </label> 
            <input type="number" name="Masse Grasse objectif" id="mg" step="0.1" min="0" />
        </div>

        <div>
            <label htmlFor="mg">Objectif de perte hebdomadaire (kg) : </label> 
            <input type="number" name="Masse Grasse objectif" id="mg" step="0.1" min="0" />
        </div>


    </form>
}

export default Form;