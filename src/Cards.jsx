import { useState } from "react"

function Cards({setCount,count}) {
    const [like,setLike]=useState(false)

    const basketHandeler=()=>{
      setCount(count+1)
    }
  return (
    <>
<div className=" flex flex-col flex-wrap sm:flex-row ">
    {/* 1 */}
    <div className='flex flex-col sm:flex-row items-center gap-6 w-56 h-[450px] sm:w-[550px] sm:h-56 bg-white shadow-xl shadow-slate-300 rounded-3xl  p-2 m-auto mt-10'>
     <div className='w-52 h-52 bg-gradient-to-r from-[#209fcd] to-[#2a5f79] rounded-2xl' ></div>
     <div className=' flex flex-1 flex-col gap-2 sm:pr-2'>

       <div className='flex flex-row justify-between'>
         <h1 className='text-lg font-semibold'>Product Name</h1>
         <span className='text-xl font-bold'>99$</span>
       </div>

       <div>
         <h1 className='text-[10px]'>Description</h1>
         <p className='text-[8px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolor reprehenderit quod dolore eius necessitatibus!</p>
       </div>

       <div className='flex flex-col gap-1'>
         <h1 className='block text-[10px]'>Colors</h1>

         <div className='flex flex-row gap-1'>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-rose-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-sky-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-indigo-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-lime-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-pink-500'></span>
         </div>

       </div>


       <div className='flex flex-col gap-1'>
          <span className='text-[10px]'>Sizes</span>

          <div className='flex flex-row gap-3'>
           <span className='font-bold cursor-pointer text-xs'>S</span>
           <span className='font-bold cursor-pointer text-xs'>M</span>
           <span className='font-bold cursor-not-allowed text-xs text-gray-300 '>L</span>
           <span className='font-bold cursor-pointer text-xs'>XL</span>
           <span className='font-bold cursor-not-allowed text-xs text-gray-300'>XXL</span>
           <span className='font-bold cursor-pointer text-xs'>XXXL</span>
          </div>
       </div>

       <div className='flex flex-row justify-between gap-2'>
         <button className='bg-[#209fcd] cursor-pointer text-white p-1 rounded-full hover:bg-[#2a5f79] transition-colors text-sm shrink-0 grow-[2]' onClick={basketHandeler}>ADD TO CARD</button>
         <button className='bg-[#209fcd] cursor-pointer text-white p-1 rounded-full hover:bg-[#2a5f79] transition-colors text-sm shrink grow-[1] flex justify-center focus:bg-red-200' >❤️</button>
       </div>
 
     </div>
    </div>


   {/* 2 */}

    <div className='flex flex-col sm:flex-row items-center gap-6 w-56 h-[450px] sm:w-[550px] sm:h-56 bg-white shadow-xl shadow-slate-300 rounded-3xl  p-2 m-auto mt-10'>
     <div className='w-52 h-52 bg-gradient-to-r from-[#209fcd] to-[#2a5f79] rounded-2xl' ></div>
     <div className=' flex flex-1 flex-col gap-2 sm:pr-2'>

       <div className='flex flex-row justify-between'>
         <h1 className='text-lg font-semibold'>Product Name</h1>
         <span className='text-xl font-bold'>76$</span>
       </div>

       <div>
         <h1 className='text-[10px]'>Description</h1>
         <p className='text-[8px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolor reprehenderit quod dolore eius necessitatibus!</p>
       </div>

       <div className='flex flex-col gap-1'>
         <h1 className='block text-[10px]'>Colors</h1>

         <div className='flex flex-row gap-1'>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-rose-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-sky-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-indigo-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-lime-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-pink-500'></span>
         </div>

       </div>


       <div className='flex flex-col gap-1'>
          <span className='text-[10px]'>Sizes</span>

          <div className='flex flex-row gap-3'>
           <span className='font-bold cursor-pointer text-xs'>S</span>
           <span className='font-bold cursor-not-allowed text-xs text-gray-300'>M</span>
           <span className='font-bold cursor-not-allowed text-xs text-gray-300'>L</span>
           <span className='font-bold cursor-pointer text-xs'>XL</span>
           <span className='font-bold cursor-not-allowed text-xs text-gray-300'>XXL</span>
           <span className='font-bold cursor-pointer text-xs'>XXXL</span>
          </div>
       </div>

       <div className='flex flex-row justify-between gap-2'>
         <button className='bg-[#209fcd] cursor-pointer text-white p-1 rounded-full hover:bg-[#2a5f79] transition-colors text-sm shrink-0 grow-[2]'onClick={basketHandeler}>ADD TO CARD</button>
         <button className='bg-[#209fcd] cursor-pointer text-white p-1 rounded-full hover:bg-[#2a5f79] transition-colors text-sm shrink grow-[1] flex justify-center focus:bg-red-200' >❤️</button>

       </div>
 
     </div>
    </div>


  {/* 3 */}


    <div className='flex flex-col sm:flex-row items-center gap-6 w-56 h-[450px] sm:w-[550px] sm:h-56 bg-white shadow-xl shadow-slate-300 rounded-3xl  p-2 m-auto mt-10'>
     <div className='w-52 h-52 bg-gradient-to-r from-[#209fcd] to-[#2a5f79] rounded-2xl' ></div>
     <div className=' flex flex-1 flex-col gap-2 sm:pr-2'>

       <div className='flex flex-row justify-between'>
         <h1 className='text-lg font-semibold'>Product Name</h1>
         <span className='text-xl font-bold'>88.9$</span>
       </div>

       <div>
         <h1 className='text-[10px]'>Description</h1>
         <p className='text-[8px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolor reprehenderit quod dolore eius necessitatibus!</p>
       </div>

       <div className='flex flex-col gap-1'>
         <h1 className='block text-[10px]'>Colors</h1>

         <div className='flex flex-row gap-1'>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-rose-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-sky-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-indigo-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-lime-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-pink-500'></span>
         </div>

       </div>


       <div className='flex flex-col gap-1'>
          <span className='text-[10px]'>Sizes</span>

          <div className='flex flex-row gap-3'>
           <span className='font-bold cursor-pointer text-xs'>S</span>
           <span className='font-bold cursor-pointer text-xs'>M</span>
           <span className='font-bold cursor-pointer text-xs'>L</span>
           <span className='font-bold cursor-pointer text-xs'>XL</span>
           <span className='font-bold cursor-pointer text-xs'>XXL</span>
           <span className='font-bold cursor-pointer text-xs'>XXXL</span>
          </div>
       </div>

       <div className='flex flex-row justify-between gap-2'>
         <button className='bg-[#209fcd] cursor-pointer text-white p-1 rounded-full hover:bg-[#2a5f79] transition-colors text-sm shrink-0 grow-[2]'onClick={basketHandeler}>ADD TO CARD</button>
         <button className='bg-[#209fcd] cursor-pointer text-white p-1 rounded-full hover:bg-[#2a5f79] transition-colors text-sm shrink grow-[1] flex justify-center focus:bg-red-200' >❤️</button>

       </div>
 
     </div>
    </div>

   {/* 4 */}

    <div className='flex flex-col sm:flex-row items-center gap-6 w-56 h-[450px] sm:w-[550px] sm:h-56 bg-white shadow-xl shadow-slate-300 rounded-3xl  p-2 m-auto mt-10'>
     <div className='w-52 h-52 bg-gradient-to-r from-[#209fcd] to-[#2a5f79] rounded-2xl' ></div>
     <div className=' flex flex-1 flex-col gap-2 sm:pr-2'>

       <div className='flex flex-row justify-between'>
         <h1 className='text-lg font-semibold'>Product Name</h1>
         <span className='text-xl font-bold'>115$</span>
       </div>

       <div>
         <h1 className='text-[10px]'>Description</h1>
         <p className='text-[8px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolor reprehenderit quod dolore eius necessitatibus!</p>
       </div>

       <div className='flex flex-col gap-1'>
         <h1 className='block text-[10px]'>Colors</h1>

         <div className='flex flex-row gap-1'>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-rose-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-sky-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-indigo-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-lime-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-pink-500'></span>
         </div>

       </div>


       <div className='flex flex-col gap-1'>
          <span className='text-[10px]'>Sizes</span>

          <div className='flex flex-row gap-3'>
           <span className='font-bold cursor-pointer text-xs'>S</span>
           <span className='font-bold cursor-pointer text-xs'>M</span>
           <span className='font-bold cursor-not-allowed text-xs text-gray-300'>L</span>
           <span className='font-bold cursor-pointer text-xs'>XL</span>
           <span className='font-bold cursor-pointer text-xs'>XXL</span>
           <span className='font-bold cursor-pointer text-xs'>XXXL</span>
          </div>
       </div>

       <div className='flex flex-row justify-between gap-2'>
         <button className='bg-[#209fcd] cursor-pointer text-white p-1 rounded-full hover:bg-[#2a5f79] transition-colors text-sm shrink-0 grow-[2]'onClick={basketHandeler}>ADD TO CARD</button>
         <button className='bg-[#209fcd] cursor-pointer text-white p-1 rounded-full hover:bg-[#2a5f79] transition-colors text-sm shrink grow-[1] flex justify-center focus:bg-red-200' >❤️</button>

       </div>
 
     </div>
    </div>

    {/* 5 */}

    <div className='flex flex-col sm:flex-row items-center gap-6 w-56 h-[450px] sm:w-[550px] sm:h-56 bg-white shadow-xl shadow-slate-300 rounded-3xl  p-2 m-auto mt-10'>
     <div className='w-52 h-52 bg-gradient-to-r from-[#209fcd] to-[#2a5f79] rounded-2xl' ></div>
     <div className=' flex flex-1 flex-col gap-2 sm:pr-2'>

       <div className='flex flex-row justify-between'>
         <h1 className='text-lg font-semibold'>Product Name</h1>
         <span className='text-xl font-bold'>16.99$</span>
       </div>

       <div>
         <h1 className='text-[10px]'>Description</h1>
         <p className='text-[8px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolor reprehenderit quod dolore eius necessitatibus!</p>
       </div>

       <div className='flex flex-col gap-1'>
         <h1 className='block text-[10px]'>Colors</h1>

         <div className='flex flex-row gap-1'>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-rose-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-sky-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-indigo-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-lime-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-pink-500'></span>
         </div>

       </div>


       <div className='flex flex-col gap-1'>
          <span className='text-[10px]'>Sizes</span>

          <div className='flex flex-row gap-3'>
           <span className='font-bold cursor-pointer text-xs text-gray-300'>S</span>
           <span className='font-bold cursor-pointer text-xs'>M</span>
           <span className='font-bold cursor-pointer text-xs'>L</span>
           <span className='font-bold cursor-pointer text-xs'>XL</span>
           <span className='font-bold cursor-pointer text-xs'>XXL</span>
           <span className='font-bold cursor-pointer text-xs'>XXXL</span>
          </div>
       </div>

       <div className='flex flex-row justify-between gap-2'>
         <button className='bg-[#209fcd] cursor-pointer text-white p-1 rounded-full hover:bg-[#2a5f79] transition-colors text-sm shrink-0 grow-[2]'onClick={basketHandeler}>ADD TO CARD</button>
         <button className='bg-[#209fcd] cursor-pointer text-white p-1 rounded-full hover:bg-[#2a5f79] transition-colors text-sm shrink grow-[1] flex justify-center focus:bg-red-200' >❤️</button>
       </div>
 
     </div>
    </div>

    {/* 6 */}

    <div className='flex flex-col sm:flex-row items-center gap-6 w-56 h-[450px] sm:w-[550px] sm:h-56 bg-white shadow-xl shadow-slate-300 rounded-3xl  p-2 m-auto mt-10'>
     <div className='w-52 h-52 bg-gradient-to-r from-[#209fcd] to-[#2a5f79] rounded-2xl' ></div>
     <div className=' flex flex-1 flex-col gap-2 sm:pr-2'>

       <div className='flex flex-row justify-between'>
         <h1 className='text-lg font-semibold'>Product Name</h1>
         <span className='text-xl font-bold'>9.99$</span>
       </div>

       <div>
         <h1 className='text-[10px]'>Description</h1>
         <p className='text-[8px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolor reprehenderit quod dolore eius necessitatibus!</p>
       </div>

       <div className='flex flex-col gap-1'>
         <h1 className='block text-[10px]'>Colors</h1>

         <div className='flex flex-row gap-1'>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-rose-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-sky-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-indigo-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-lime-500'></span>
           <span className='inline-block w-3 h-3 cursor-pointer rounded bg-pink-500'></span>
         </div>

       </div>


       <div className='flex flex-col gap-1'>
          <span className='text-[10px]'>Sizes</span>

          <div className='flex flex-row gap-3'>
           <span className='font-bold cursor-pointer text-xs'>S</span>
           <span className='font-bold cursor-pointer text-xs'>M</span>
           <span className='font-bold cursor-pointer text-xs'>L</span>
           <span className='font-bold cursor-pointer text-xs'>XL</span>
           <span className='font-bold cursor-pointer text-xs'>XXL</span>
           <span className='font-bold cursor-not-allowed text-xs text-gray-300'>XXXL</span>
          </div>
       </div>

       <div className='flex flex-row justify-between gap-2'>
         <button className='bg-[#209fcd] cursor-pointer text-white p-1 rounded-full hover:bg-[#2a5f79] transition-colors text-sm shrink-0 grow-[2]'onClick={basketHandeler}>ADD TO CARD</button>
         <button className='bg-[#209fcd] cursor-pointer text-white p-1 rounded-full hover:bg-[#2a5f79] transition-colors text-sm shrink grow-[1] flex justify-center focus:bg-red-200' >❤️</button>
       </div>
 
     </div>
    </div>
</div>   
 </>
  )
}

export default Cards











