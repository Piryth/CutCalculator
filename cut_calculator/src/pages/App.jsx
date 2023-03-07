import { useState } from "react";
import Form from '../components/Form';
import Result from "../components/Result";
import Profil from "../model/Profil";
import '../style/App.scss'

function App() {

  const[profil, updateProfil] = useState(new Profil());


    return (
    <div className="App">
        <header className="App-header">
            <h1 id='title'>Calculatrice de sèche</h1>
        </header>
        <main className="App-main">
            <div className="Form-section">
              <Form id="form" profil={profil} updateProfil={updateProfil}/>
            </div>
            <div className="Result-section">
                <Result profil={profil} updateProfil={updateProfil}/>
            </div>
        </main>
    </div>
  );
}

export default App;
