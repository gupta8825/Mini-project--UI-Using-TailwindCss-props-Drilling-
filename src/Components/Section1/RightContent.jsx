import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    console.log(props.users)
  return (
    <div id="right" className='h-full  rounded-4xl overflow-x-auto w-2/3 p-7 flex flex-nowrap gap-10'>
    
{props.users.map(function(elem,index){
    return <RightCard key={index} id={index} img={elem.img} color={elem.color} tag={elem.tag} />
})}


        
    </div>
  )
}

export default RightContent