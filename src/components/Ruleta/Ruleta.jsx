import React from 'react'
import { useState , useRef } from 'react'
import './ruleta.css'
function Ruleta({game}) {

  const [rotation,setRotation] = useState(0)
  const audio = new Audio("../assets/soundR.mp3")
  const audio2 = new Audio("../assets/soundSelect.mp3")
  const girar = () => {
    const nRotation = Math.floor(Math.random() * 428) + Math.floor(Math.random() * -534);
    setRotation(nRotation);
    audio.play()
    
    audio.volume = 0.5;
    audio2.volume = 0.3;
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
      audio2.play()
    }, 4000);
    
    
  };
  
  return (<>
  
  
    <div className='ruletaContainer'>
        <div className="flecha">
          <img src="../assets/flechawbg.png" alt="flecha" />
        </div>
        <div className='ruleta' style={{
          backgroundImage: `url(../assets/ruleta.png)`,
          transform: `rotate(${rotation}deg)`,
          transition: "4s cubic-bezier(0.2,0.8,0.7,0.99)"}}
          ></div>

        
        <button className="btn" onClick={girar}>Tirar</button>
    </div>
    </>
  )
}

export default Ruleta