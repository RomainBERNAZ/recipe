import React, { useState } from 'react';
import axios from 'axios';
import './Modal.css'


const Modal = () => {

    const [titleModal, setTitleModal] = useState('');
    const [imageModal, setImageModal] = useState('');
    const [textModal, setTextModal] = useState('');
  

    function refreshPage() {
        window.location.reload(false);
      }

    function closeModal() {
        let modal = document.getElementById('recipeModal');
        modal.style.display="none"; 
        refreshPage();
    }




        const createRecipe =  (e) => {

            let token = localStorage.getItem('jwtToken')
            
            e.preventDefault();
            const formData = new FormData();
            const data = {
                title: titleModal,
                recipeText: textModal
            };

            formData.append('files.picture', imageModal, imageModal.name);
            formData.append('data', JSON.stringify(data));
            console.log(formData);
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            console.log(config)

            axios
                .post('http://localhost:1337/recipes',
                formData, config)
                .then(response => {
                    // Handle success.
                    console.log('La recette a bien été créée');
                    setTimeout(() => {
                        closeModal();
                    },200);
                })
                .catch(error => {
                    // Handle error.
                    console.log('An error occurred:', error.response);
                });

                
    } 
    


    return (

            <div id="recipeModal" className="recipeModal">
                <div className="modalTitle">
                <h3 className="recipeTitle">NEW RECIPE</h3><button onClick={closeModal}><i className="fas fa-times"></i></button>
                </div>
                <form onSubmit={createRecipe}>
                    <input className="titleInput" type="text" placeholder="Title..." onChange={(e) => setTitleModal(e.currentTarget.value)} required/>
                    <textarea name="" id="" cols="40" rows="20" placeholder="Text..." 
                              onChange={(e) => setTextModal(e.currentTarget.value)} required>
                    </textarea>
                    <input className="imageInput" type="file" name="" id="" onChange={(e) => setImageModal(e.currentTarget.files[0])}/>
                    <button type="submit" className="saveModal">SAVE IT !</button>
                </form>
            </div>


    )
}

export default Modal;

            