import React from 'react'
import 'remixicon/fonts/remixicon.css'

function RightCardContent(props) {
  return (
    <div>
        
        <div className='absolute top-0  left-0 h-full w-full  p-8 flex flex-col justify-between'>

            <h2 className='bg-white rounded-full h-12 w-12  font-14 flex justify-center items-center text-xl'>{props.id+1}</h2>
            <div>
                <p className='texts-shadow-2xs text-lg leading-relexed text-white mb-14'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi odio harum fuga porro? Voluptatem, excepturi!</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-2 rounded-full  '>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full  '><i className ="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent