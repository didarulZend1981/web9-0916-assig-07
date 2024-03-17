
import { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './App.css'

import Baner from './components/Baner/Baner'


import NavBar from './components/NavBar/NavBar'
import Recipes from './components/Recipes/Recipes'
import SideContent from './components/SideContent/SideContent'

function App() {
  
  

  
  const [cooks, setCooks] =useState([]);
  const [cookings, setCookings]=useState([]);
  const handleAddToCooking = cooking =>{
    const newCooks =cooks.filter(item=>item.recipe_id !=cooking.recipe_id);
    if (newCooks) {
      toast.warn("cooking");
      setCooks(newCooks);
    }
  
    const newCookings = [...cookings, cooking];
    setCookings(newCookings);
  }

  const handleAddToCook = recipe =>{
    // console.log(didar);

    const alreadyExists = cooks.find((rec) => rec.recipe_id == recipe.recipe_id);


    if (alreadyExists) {
         toast.warn("Menu already Selected");
    } else {
        setCooks((rec) => [...rec, recipe]);
        toast.success("Menu Added");
    }



    // const newCooks = [...cooks,recipe];
    // setCooks(newCooks);


  }
  

  const handleDelete = (id) =>{
    const setCooks =cooks.filter(item=>item.recipe_id !=id);
    
  }

  return (
    <>
      <NavBar></NavBar>
      <Baner></Baner>
      
      <div className="max-w-[1320px] mx-auto md:w-auto   h-[650px]  bg-no-repeat bg-[url('https://i.ibb.co/fr2yvK6/7.png')]">
      <div className="flex justify-between">
          <div className='p-[200px] text-center'>
              <div className="text-[40px] text-[white] font-extrabold mb-[20px]">
                <h2>Discover an exceptional cooking</h2> 
                <h2>class tailored for you!</h2>
                </div> 
              <div className="text-[18px] text-[white] font-normal"><p>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+</p> 
              <p>coding problems to become an exceptionally well world-class Programmer.</p></div>
              <div className='flex gap-4 place-content-center'>
              <button className="btn bg-[#0be58a] hover:bg-[#0be58a] mt-[20px] rounded-full">Explore Now</button>
              <button className="btn  bg-transparent text-[white] mt-[20px] hover:bg-transparent rounded-full">Our Feedback</button>
              </div>
             
          </div>
          

          </div>

        </div>
        
      
      
     
      <div className='w-1/2 max-w-7xl mx-auto text-center'>
            <h3>Our Recipes</h3>
            <p> In our restaurant, good quality food is available, much better than others and at a comparable price. 
              Mother's food is less harmful to the body.</p>
      </div>
      <div className='md:flex max-w-7xl mx-auto'>
          <Recipes handleAddToCook={handleAddToCook}></Recipes>
          <SideContent 
              cooks={cooks}
              handleAddToCooking={handleAddToCooking}
              cookings={cookings}
          ></SideContent>
          
      </div>
      <ToastContainer />
    </>
  )
}

export default App
