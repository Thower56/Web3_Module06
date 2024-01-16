import logo from './logo.svg';
import './App.css';
import { PageAccueil, PageAccueilAvecProblem, UtilisateurGitHub, API_Meteo} from './DemoUseEffect.js'


function App() {
  return(
    <>
    <PageAccueil />,
    <PageAccueilAvecProblem />,
    <UtilisateurGitHub identifiant="Thower56"/>,
    <API_Meteo/>
    </>
  )
}

export default App;
