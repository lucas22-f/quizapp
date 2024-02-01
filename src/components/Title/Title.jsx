import React from 'react';
import './Title.css';
const Title = () => {
    return (
        <>
            <div className='mainTitle'>
                <h1>Desafio Gamer Quiz</h1>
            </div>

            <h2 className='subTitle'>Juegos mas jugados</h2>
            <h3 className='desc'> Que tanto sabes maquina?😎</h3>
            <div className='intro'> <img className='introimg' src="../../src/assets/intro.jpg" alt="" /></div>
           
            <h3 className='desc'>Selecciona tu main😎</h3>
        </>
    );
};
    
export default Title;
