

const Cooking = ({cooking}) => {
  const {Recipe_name,Preparing_time,Calories}= cooking;
  return (
    <div>
      <div className="flex gap-3">
      <span>{Recipe_name}</span>
      <span>{Preparing_time}</span>
      <span>{Calories}</span>
      
    </div>
    </div>
  );
};

export default Cooking;