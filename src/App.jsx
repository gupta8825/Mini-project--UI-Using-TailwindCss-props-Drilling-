import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'


function App() {
  const users =[
    {
      img:'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Satisfied',
      color:"blue"
    },
    {
       img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'UnderServed',
      color:'lightseagreen'
    },
    {
       img:'https://images.unsplash.com/photo-1542767352-e98201e84ed8?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Underbanked',
      color:"pink"
    },
    {
      img:"https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:'',
      tag:'Meeting',
      color:"black"
    }
  ]
  return (
    <>
    <div>
    <Section1 users={users}/>
    <Section2/>


        </div>
        </>
  )
}

export default App