import { useState } from "react";
import Form from './Form';
import Result from "./Result";
import Profil from "../model/Profil";
import '../style/App.scss'

function App() {

  const[profil, updateProfil] = useState(new Profil());


    return (
    <div className="App">
      <header className="App-header">
          <div className="Form-section">
              <h1 id='title'>Calculatrice de sèche</h1>
              <Form profil={profil} updateProfil={updateProfil}/>
          </div>
          <Result profil={profil} updateProfil={updateProfil}/>
      </header>
    </div>
  );
}

export default App;
