
import PropTypes from 'prop-types';
import Cook from '../Cook/Cook';
const Cooks = ({cooks,handleAddToCooking}) => {
  
  return (
    <div>
      <div>
      <h2 className='w-2/3 mx-auto font-semibold text-[24px] text-center border-b-2 pb-[20px] mb-[20px] mt-[20px]'>Want to cook:{cooks.length}</h2>

      {/* {
        cooks.map((cook,index) => <Cook 
           key={cook.recipe_id}
           cook={cook}
           handleAddToCooking={handleAddToCooking}
           
           ></Cook>)
        
      } */}
        <div className="flex gap-3 px-6">
          <span className='w-1/12'></span>
          <span className='w-4/12'>Nmae</span>
          <span className='w-2/12'>Time</span>
          <span className='w-2/12'>Calories</span>
          <span className='w-3/12'></span>
        </div>
      {
        

        
        cooks.map((cook,index)=>(

          <div className="flex gap-3 bg-slate-100 px-6 py-2">
          <span className='w-1/12'>{index+1}</span>
          <span className='w-4/12 text-start'>{cook.Recipe_name}</span>
          <span className='w-2/10 text-center'>{cook.Preparing_time} minutes</span>
          <span className='w-2/10 text-center'>{cook.Calories} calories</span>
          <span className='w-3/12'>
            <button
            
            onClick={
              () => { 
                handleAddToCooking(cook); 
                
              }
    
            
            }
    
             className="bg-[#94f0ca] rounded-lg p-3">Preparing</button>
            </span>
        </div>
        ))
      }

      
      </div>
      
      <div>

      </div>
    </div>
  );
};
Cooks.propTypes ={
  Cooks:PropTypes.array
}
export default Cooks;