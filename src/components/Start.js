import React from 'react'
import '../componentStyles/Start.css'
import Register from '../components/Register';

export default function start() {
  return (
    <div className="startDiv">
      <div className='innerDiv'>
        <h1 style={{fontSize:'37px',color:'red',margin:'0'}}>uv medico</h1>
        <p style={{fontSize:'70px', fontWeight:"80",margin:'0 0 30px 0px'}}>Professional<br/><strong>Doctors</strong></p>
        <button style={{ padding: '15px 30px', fontSize: '16px' ,border:'none',cursor:'pointer'}}>Start Now</button>
      </div>
      
    </div>
  )
}
