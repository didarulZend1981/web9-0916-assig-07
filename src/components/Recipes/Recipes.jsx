import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

import PropTypes from 'prop-types';
const Recipes = ({ handleAddToCook }) => {
  const [recipes, setRecipes]= useState([]);
        useEffect( () =>{
          fetch('Recipes.json')
          .then(res=>res.json())
          .then(data =>setRecipes(data))

        }, [])
  return (
    <div className="md:w-2/3 grid grid-cols-2">
      
      {
        
        recipes.map(recipe=>
        <Recipe key={recipe.recipe_id} 
        recipe={recipe}
        handleAddToCook={handleAddToCook}
        ></Recipe>)
      }
    </div>
  );
};
Recipes.propTypes ={
  handleAddToCook:PropTypes.func
}
export default Recipes;