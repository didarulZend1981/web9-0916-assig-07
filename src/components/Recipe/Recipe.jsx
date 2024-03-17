import PropTypes from 'prop-types';
import { BsStopwatch } from "react-icons/bs";
import { FaFire } from "react-icons/fa";
const Recipe = ({ recipe, handleAddToCook }) => {
  // console.log(recipe);
  const {Recipe_name,Recipe_image,Short_description,Ingredients,Preparing_time,Calories} = recipe;
  return (
    <div>
            `<div class="card w-96 bg-base-100 rounded border">
        <figure class="px-10 pt-10">
          <img src={Recipe_image} />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{Recipe_name}</h2>
          <p className='border-b-2 y-2'>{Short_description}</p>
          <h1>Ingredients:{Ingredients.length}</h1>
            <ul>
                {
                  Ingredients.map((val,idx) =><li key={idx}>{idx+1}.{val}</li>)
                }
            </ul>
            <div className='flex justify-between'>
              <span className='flex'><BsStopwatch />{Preparing_time} minutes</span>
              <span className='flex'><FaFire />{Calories} calories</span>
            </div>
          <div class="card-actions">
            <button class="btn bg-[#0bdf87] rounded-full"
            onClick={() => handleAddToCook(recipe)}
            >Want to Cook</button>
          </div>
        </div>
      </div>`
    </div>
  );
};
Recipe.propTypes ={
  recipe:PropTypes.object.isRequired,
  handleAddToCook:PropTypes.func
}
export default Recipe;