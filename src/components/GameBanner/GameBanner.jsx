import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Ruleta from '../Ruleta/Ruleta';
import './GameBanner.css';
const GameBanner = () => {
    const [isSelect, setIsSelect] = useState(false)
    const [game, setGame] = useState('')
    const ruletaRef = useRef();

    const setear = (game) => {
        setGame(game)
        setIsSelect(true)
        ruletaRef.current.scrollIntoView({ behavior: 'smooth' });

    }
    useEffect(() => {
        if (isSelect && ruletaRef.current) {
            ruletaRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isSelect]);
    return (
        <>
            <button onClick={()=>setIsSelect(false)}>MENU</button>
            <h2 style={{ color: "white" }}>{game}</h2>
            <CSSTransition
                in={!isSelect}
                timeout={500}
                classNames="ruleta"
                unmountOnExit>

                <div className="image-band">

                    <img src="../../src/assets/lol.png" onClick={() => setear('lol')} alt="lol" />
                    <img src="../../src/assets/valo.png" onClick={() => setear('valorant')} alt="valorant" />
                    <img src="../../src/assets/cs.png" onClick={() => setear('cs2')} alt="cs2" />
                    <img src="../../src/assets/fornite.png" onClick={() => setear('fornite')} alt="fortnite" />

                </div>

            </CSSTransition>

            
            <CSSTransition
                in={isSelect}
                timeout={500}
                classNames="ruleta"
                unmountOnExit>
                <div ref={ruletaRef}>
                    <Ruleta game={game} />
                </div>
            </CSSTransition>
        </>
    );
};

export default GameBanner;
