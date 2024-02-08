import React from 'react';
import { useRef } from 'react';
import './Title.css';
const Title = ({menuRef,setArranque}) => {
    const comenzar = () => {
        menuRef.current.scrollIntoView({ behavior: 'smooth' });
        setArranque(true)
    }
    return (
        <div style={{height:"99vh"}}>
            <div className='mainTitle'>
                <h1>Desafio Gamer Quiz</h1>
            </div>

            <h2 className='subTitle'>Juegos mas jugados</h2>
            <h3 className='desc'> Que tanto sabes maquina?😎</h3>
            <div style={{display:"flex",width:"100%",justifyContent:"center",alignItems:"center"}}>
             <div className='intro'> <img className='introimg' src="../assets/intro.jpg" alt="" /></div>

            </div>
           <div style={{display:'flex',width:"100%",justifyContent:"center"}}>

            <button className='button'onClick={comenzar} style={{fontSize:"30px",paddingLeft:"50px",paddingRight:"50px",paddingTop:"23px",paddingBottom:"23px"}}>Comenzar</button>
           </div>
        </div>
    );
};
    
export default Title;
