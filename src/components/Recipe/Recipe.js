import axios from 'axios';
import React from 'react';
import './Recipe.css';


const urlHost =  'http://localhost:1337';




const deleteRecipe = (e) => {

    function refreshPage() {
        window.location.reload(false);
      }

    let idRecipe = e.target.parentNode.id;
    let token = localStorage.getItem('jwtToken')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    
    axios
        .delete(`http://localhost:1337/recipes/${idRecipe}`,
        config)
        .then(response => {
            // Handle success.
            console.log('La recette a bien été supprimée');
            setTimeout(() => {
                refreshPage();
            },200);
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);
        });

}



const Recipe = ({title, picture, id}) => {

    return(

        <div className="container">
            <div className="recipeCard">
                <div className="head-recipe">
                    <h3 className="recipeTitle">{title}</h3>
                    <button onClick={deleteRecipe} id={id}><i className="fas fa-times"></i></button>
                </div>
                <img className="recipeImage" src={urlHost+picture.url} alt=""></img>
            </div>
        </div>
            
       

    )
}

export default Recipe;