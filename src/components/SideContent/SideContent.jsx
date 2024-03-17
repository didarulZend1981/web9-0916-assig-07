
import { useState } from 'react';
import Cooks from '../Cooks/Cooks';
import Cookings from './Cookings/Cookings';

const SideContent = ({cooks,handleAddToCooking,cookings}) => {
  
  return (
    <div className='md:w-1/3 rounded border  mt-5 pt-5'>
      <Cooks cooks={cooks} handleAddToCooking={handleAddToCooking}></Cooks>
      <Cookings cookings={cookings}></Cookings>
    </div>
  );
};

export default SideContent;