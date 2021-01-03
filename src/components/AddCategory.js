import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
   //({ setCategories }) <==> Desestructuracion de props cogiendo solo setCategories
   const [inputValue, setinputValue] = useState('');
   
   const handleInputChange = (ev) => {
      //console.log(ev.target.value);
      setinputValue(ev.target.value);
   }
   
   const handleSubmit = (ev) => {
      ev.preventDefault();
      //console.log(ev.target.inputCat.value);
      if ( inputValue.trim().length > 2 ) { // Validacion sobre tamaño de las cadenas
         setCategories( cats => [inputValue, ...cats ] );
         setinputValue(''); //Borramos el inputValue para que no se repita
      }
         /*  LO IDEAL SERÍA HACER UNA VALIDACION SOBRE CATS REPETIDAS */
      
   }

/* Tarea :
   1.- Modificar AddCategory para que reciba por props el setCategories 
      pasado desde GifExpertApp
   2.- Modificar handleSubmit para que use setCategories para añadir la
      nueva categoria. 
 */
   return (
      <form onSubmit={ handleSubmit }>
         <input 
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
         />      
      </ form>
   )
}

AddCategory.propTypes = {
   setCategories: PropTypes.func.isRequired,
}
