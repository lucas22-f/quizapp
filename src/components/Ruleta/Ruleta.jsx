import React from 'react'
import { useState , useRef } from 'react'
import './ruleta.css'
function Ruleta() {

  const [rotation,setRotation] = useState(0)
  const girar = () => {
    const nRotation = Math.floor(Math.random() * 428) + Math.floor(Math.random() * -534);
    setRotation(nRotation);
    
  };
  
  return (<>
  
    <div className='ruletaContainer'>
        <div className='ruleta' style={{
          backgroundImage: `url(../../src/assets/ruleta.png)`,
          transform: `rotate(${rotation}deg)`,
          transition: "6s cubic-bezier(0.2,0.8,0.7,0.99)"}}
          ></div>

        <div className="flecha">
          <img src="../src/assets/flechawbg.png" alt="flecha" />
        </div>
        <button className="btn" onClick={girar}>Girar</button>
    </div>
    </>
  )
}

export default Ruleta