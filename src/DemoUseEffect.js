import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const PageAccueil = ()=>{
    const [nombre, setNombre] = useState({valeur: 0});

    // useEffect(()=> setNombre({valeur: 5}));

    return (
        <>
        <div class="container">
            <div class="form-group row">
                <div class="col-6">
                    <h1>Le nombre est {nombre.valeur}</h1>
                </div>
            </div>
        </div>
        </>
    )
};

export const PageAccueilAvecProblem = () => {
    const [nombre, setNombre] = useState({valeur: 0});

    useEffect(()=> setNombre({valeur: Math.ceil(Math.random() * 10)}), []);

    return (
        <>
        <div class="container">
            <div class="form-group row">
                <div class="col-6">
                    <h1>Le nombre est {nombre.valeur}</h1>
                </div>
            </div>
        </div>
        </>
    )
};

export function UtilisateurGitHub({identifiant}){
    const [donneesUtilisateur, setDonneesUtilisateur] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${identifiant}`)
        .then(resultat => resultat.json())
        .then(setDonneesUtilisateur)
        .catch(console.error);
    }, []);

    if(donneesUtilisateur !== null){
        return (
            <div class="container">
                <div class="form-group row">
                    <div class="col-6">
                        <h1>{donneesUtilisateur.name}</h1>
                        <h3>{donneesUtilisateur.login}</h3>
                        <img src={donneesUtilisateur.avatar_url} width={100}/>
                    </div>
                </div>
            </div>
            
        )
    }
    else {
        return null
    }
}

export function API_Meteo(){
    const [donneesTemperature, setTemperature] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [latitude, setLatitude] = useState(null);

    // useEffect(() => {
    //     fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
    //     .then(resultat => resultat.json)
    //     .then(setTemperature)
    //     .catch(console.error);
    // }, []);

    

    function envoyerDemandeMeteo() {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
        .then(resultat =>resultat.json())
        .then(resultatjson => {
            setTemperature(resultatjson.current_weather.temperature)
        })
        .catch(console.error);
    }

    return (
        <div class="container">
            <div class="form-group row">
                <div class="col-6">
                    <h3>Latitude</h3>
                    <input class="form-control" id='inputLatitude' onChange={e => setLatitude(e.target.value)}/>
                    <h3>Longitude</h3>
                    <input class="form-control" id='inputLongitude' onChange={e => setLongitude(e.target.value)}/>
                    <button type='button' class='btn btn-primary' onClick={envoyerDemandeMeteo}>Envoyer</button>
                    <h1>Il fait presentement {donneesTemperature}</h1>
                </div>
            </div>
        </div>
    )
    
}