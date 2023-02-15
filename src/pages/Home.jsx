import React from 'react'
import arr from '../data'

function Home() {
  const redirectFunc = (id) =>{
    window.location = `/detail/${id}`
  }
  
  return (
    <div>Home
     {
      arr.map((ar,i)=>(
        <div key={i} onClick={()=> redirectFunc(ar.id)} style={{margin:"10px",cursor:"pointer",border:"1px solid black",padding:"5px"}}>{ar.name}</div>
      ))

     }
      <button onClick={redirectFunc}>YönlendirDetail</button>
    </div>
  )
}

export default Home