import React from 'react'
import Search from '../assets/search-normal.png'

function RecommendedRoles() {
  return (
    <div className='flex flex-col items-start p-[24px] gap-[24px] w-[638px] h-[200px]  bg-white rounded-2xl '>
   <h1 className='capitalize text-[24px] font-semibold leading-6 text-[#333333] tracking-wide'>Recommended roles</h1>
   <form className=''>
    <input type="text" placeholder="&#xF002;" className='"mainLoginInput"'/>
    {/* <input type="text" placeholder="&#xF002; search users" style="font-family:Arial, FontAwesome" /> */}
{/* 
    <input type="text" placeholder="&#xF002;" style=font-family:Arial, FontAwesome /> */}
     
   </form>
   </div>
  )
}

export default RecommendedRoles;