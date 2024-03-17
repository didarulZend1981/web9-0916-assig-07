


const Cook = ({cook,handleAddToCooking}) => {
  const {Recipe_name,Preparing_time,Calories}= cook;
  return (
    <div className="flex gap-3">
      <span></span>
      <span>{Recipe_name}</span>
      <span>{Preparing_time}</span>
      <span>{Calories}</span>
      <span>
        <button
        
        onClick={
          () => { 
            handleAddToCooking(cook); 
            
          }

        
        }

         >Preparing</button>
        </span>
    </div>
   
  );
};



export default Cook;

// rscp