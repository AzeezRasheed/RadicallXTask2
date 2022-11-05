import React from 'react'
import Category from './Category'
import Description from './Description'
import { useSelector } from "react-redux";


function Right() {
  const rightRow = useSelector((state) => state.reducer.rightRow);
  

const ForRightRow = () => {
  if(rightRow === "category"){
    return  <Category/>;
    
  }else if(rightRow === "description"){
    return <Description/>
  }else return <></>;
}

  return (
   <div className='absolute left-[700px] top-[212px]'>
   {ForRightRow()} 
   </div>
  )
}

export default Right
