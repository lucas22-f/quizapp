import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Ruleta from '../Ruleta/Ruleta';
import './GameBanner.css';
import Title from '../Title/Title';
const GameBanner = () => {
    const [isSelect, setIsSelect] = useState(false)
    const [game, setGame] = useState('')
    const [arranque,setArranque] = useState(false)
    const ruletaRef = useRef();
    const menuRef = useRef();
    
    const setear = (game) => {
        setGame(game)
        setIsSelect(true)
    }
    useEffect(() => {
        if (isSelect && ruletaRef.current) {
            ruletaRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        if(!isSelect && arranque && menuRef.current){
            menuRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        
    }, [isSelect]);
    return (
        <div>
            {!isSelect && <Title menuRef={menuRef} setArranque={setArranque}></Title>}
            {!isSelect && <h3 className='desc' ref={menuRef}>Selecciona tu main😎</h3>}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50px", margin:"25px"}}>


                {isSelect && <h2 style={{ color: "white", fontFamily: "'Gaegu', sans-serif", fontSize: "40px",margin:"2%"}}> {game} 🤣</h2>}
                {isSelect && <button className='button' style={{ height: "30px" }} onClick={() => setIsSelect(false)}>MENU</button>}

            </div>

            <CSSTransition
                in={!isSelect}
                timeout={500}
                classNames="ruleta"

                unmountOnExit>

                <div style={{height:"90vh"}}>
                    <div className="image-band">

                        <img src="../assets/lol.png" onClick={() => setear('Lol')} alt="lol" />
                        <img src="../assets/valo.png" onClick={() => setear('Valorant')} alt="valorant" />
                        <img src="../assets/cs.png" onClick={() => setear('Cs2')} alt="cs2" />
                        <img src="../assets/fornite.png" onClick={() => setear('Fornite')} alt="fortnite" />

                    </div>
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
        </div>
    );
};

export default GameBanner;
