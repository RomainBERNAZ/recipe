import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Recipe from './Recipe/Recipe';
import Modal from './Modal/Modal'
import './Main.css';

const Main = () => {

    const API = 'http://localhost:1337/recipes';
    const [recipes, setRecipes] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    //Récupération du username de la personne connectée
    let userName = localStorage.getItem('userToken')
    
    //Uppercase on the first letter
    let userNameFinal = userName.charAt(0).toUpperCase() + userName.slice(1)

    useEffect(() => {
        axios.get(API)
        .then((response) => {
             console.log(response.data);
              setRecipes(response.data);
              setIsLoading(false);
        });

    },[]);

    //Affichage de la modal qui permet d'afficher une nouvelle recette
    function showModal(){
        let modal = document.getElementById('recipeModal');
        modal.style.display="block"; 

    }

    //Fonction qui permet de vider le local storage et donc, de déconnecter l'utilisateur.
    function delog(){
        localStorage.clear();
    }
    
    return( 
        <div>
            <div className="header">
            <button onClick={showModal}><i className="fas fa-plus-circle"></i></button>
                <div className="account">
                    <p>{userNameFinal}</p>
                    <a href="/" onClick={delog}>Log-out</a>
                </div>
            </div>
            <Modal/>
            <h1>{}RECIPES</h1>
            { isLoading ? 'Loading..' : recipes.length >0 && recipes.map((recipe) => 
            <Recipe key={recipe.id} {...recipe}/>)}
        </div>
    )
}

export default Main;
