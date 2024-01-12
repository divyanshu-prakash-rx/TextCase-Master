import React from 'react'

export default function Calbutton(props) {
  return (<>
   <button type="button" className={`btn ${props.text==='='?"btn-info":"btn-primary"} mb-1`} style={{width:"100%", borderRadius:"60px",backgroundColor:""}} onClick={()=>{props.handleClick(props.text)}}>{props.text}</button>
  </>
  )
}
