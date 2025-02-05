import React from 'react'
import menu from'./assets/hamburger-menu.jpg'
import ShoppingBasket from "./assets/Shopping-basket1.png"
import search from "./assets/search.png"

function Basket({count}) {
  return (
    <>
    <div className='flex flex-row sticky top-0 justify-between'>

       <div className="flex lg:ml- 5 mt-5   top-5 sm: ml-13">
        <img src={ShoppingBasket} alt="Shopping basket" className="h-8 w-8 cursor-pointer" />
        {count>0 && (
        <h1 className="w-5 h-5 flex justify-center items-center rounded-sm bg-red-500 text-white ml-[-20px] cursor-pointer mt-[20px]">{count}</h1>
        )}
       </div>

       <div className='flex flex-row w-10 lg:w-160 mt-5 h-9  rounded-full gap-3 bg-gray-200 collapse lg:visible '>
          <button><img src={search} alt="search icon" className='w-5 ml-4 cursor-pointer' /></button>
          <input type="text" className='w-150 h-9 pl-2  rounded-full focus:outline-none' placeholder='Search Item'/>
       </div>
       
       <img src={menu} alt="hamburger menu" className='w-12 h-8 mr-0.5 mt-5  cursor-pointer sm:mr-9  sm:mt-5 ' />
        
    </div>

    
    </>
  )
}

export default Basket