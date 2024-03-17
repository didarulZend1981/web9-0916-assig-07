import Cooking from "../../Cooking/Cooking";


const Cookings = ({cookings}) => {
  const time = cookings.reduce((p, c) => p + c.Preparing_time, 0);
  const calories = cookings.reduce((p, c) => p + c.Calories, 0);
  return (
    <div>
     
      <h2 className='w-2/3 mx-auto font-semibold text-[24px] text-center border-b-2 pb-[20px] mb-[20px] mt-[20px]'>Currently cooking: {cookings.length}</h2>
      
      {/* {
        cookings.map(cooking =><Cooking
          key={cooking.recipe_id}
          cooking={cooking}
        
        ></Cooking>)
      } */}

<div className="flex gap-3 px-6">
          <span className='w-1/12'></span>
          <span className='w-5/12 text-start'>Nmae</span>
          <span className='w-3/12 text-center'>Time</span>
          <span className='w-3/12 text-center'>Calories</span>
          
</div>

{


        
cookings.map((cooking,index)=>(

  <div className="flex gap-3 px-6 bg-slate-100 p-3">
  <span className='w-1/12'>{index+1}</span>
  <span className='w-5/12 text-start'>{cooking.Recipe_name}</span>
  <span className='w-3/12 text-center'>{cooking.Preparing_time} minutes</span>
  <span className='w-3/12 text-center'>{cooking.Calories} calories</span>
  
</div>
))
}
   <div className="flex gap-2 justify-end">
         
         <span className='w-3/12 text-justify'>Total Time =</span>
          <span className='w-4/12 text-justify'>Total Calories =</span>
        
          
          
   </div>
   <div className="flex gap-2 justify-end">
         
              <span className='w-3/12'>{time} Minite</span>
              <span className='w-4/12'>{calories} calories</span>
         
          
          
   </div>
      
    </div>
  );
};

export default Cookings;