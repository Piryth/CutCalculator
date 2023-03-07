import '../style/Result.scss'
import ChartResult from "./Chart";

function Result({profil, updateProfil}) {

    let simulation = profil.simulate();
    console.log(simulation.dataPoids);

    return profil.isResult ? <div className="Result-section">
            <h2>Mes résultats</h2>
            <p>Ton poids final : {simulation.poids}kg</p>
            <p>Ta sèche va durer : {simulation.nbSemaines} semaines</p>
            <ChartResult dataPoids={simulation.dataPoids} dataMg={simulation.dataMg}></ChartResult>

        </div> :
        <div className="Explanation-section">
            <h2>Comment fonctionne cette calculatrice ?</h2>

            <p><strong>Bienvenue, ami sportif !</strong><br/><br/>
                J’ai crée cette calculatrice afin d’aider les pratiquants de musculation à mesurer leur sèche.
                Attention cependant, les calculs s’appuient sur des moyennes. Chaque personne réagit différemment,
                cependant c’est un bon outil pour guider ta sèche. <br/><br/>
                <strong>Comment ça marche ?</strong><br/><br/>
                Saisis tes mensurations dans le formulaire de gauche, et le poids que tu cherches à perdre par semaine.
                C’est tout.
                La calculatrice s’occupe du reste. Elle t’indiquera ton poids final et la durée de la sèche. Elle ne
                t’explique pas comment perdre ce poids cependant. </p>
                <a className="Message-explaination" href="">Clique ici pour plus de détails !</a>


        </div>

}
export default Result;