import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCardContent from './RightCardContent'

function RightCard(props) {
  return (
    <div className='h-full shrink-0 w-80 overflow-hidden relative bg-red-400 rounded-4xl'>
        <img className='h-full w-full object-cover'src={props.img} alt="Image" 
        />

       <RightCardContent  id={props.id} color={props.color} tag={props.tag}/>

    </div>
  )
}

export default RightCard