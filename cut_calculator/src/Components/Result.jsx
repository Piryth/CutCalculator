function Result({isResult,updateIsResult}, {profil, updateProfil}) {

    return isResult ? 
    <div>
        <h2>Mes résultats</h2>
    </div>
    :
    <div>
        <h2>Saisis tes mensurations pour calculer ta sèche !</h2>
    </div>
    ; 
    
}

export default Result;