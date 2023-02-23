import { useState } from "react";
import Form from './Form';
import Profil from "../model/Profil";
import Result from "./Result";


function App() {
  const[profil, updateProfil] = useState(new Profil());
  const[isResult, updateIsResult] = useState(false);


  return (
    <div className="App">
      <header className="App-header">
        <h1 id='title'>Calculatrice de sèche</h1>
        <Form profil={profil} updateProfil={updateProfil} isResult={isResult} updateIsResult={updateIsResult}/>
        <Result profil={profil} updateProfil={updateProfil} isResult={isResult} updateIsResult={updateIsResult}></Result>
      </header>
    </div>
  );
}

export default App;
