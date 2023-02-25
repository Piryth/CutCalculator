import '../style/Result.scss'
function Result({profil, updateProfil}) {

    let simulation = profil.simulate();

    return profil.isResult ? <div>
        <h2>Mes résultats</h2>
        <p>Ton poids final : {simulation.poids}</p>
        <p>Ton taux de masse grasse à la fin : {simulation.mg}</p>
        <p>Ta sèche va durer : {simulation.nbSemaines} semaines</p>
    </div> :
        <h2>Saisis tes mensurations pour calculer ta sèche !</h2>
    
}

export default Result;