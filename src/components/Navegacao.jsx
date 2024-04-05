import React, { useState, useEffect } from 'react';
import Inicio from "./Inicio.jsx"
import Sobre from "./Sobre.jsx"
import Projetos from "./Projetos.jsx"
import * as S from "./Style.jsx"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function Navegacao(){
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);
  
    useEffect(() => {
      function updateCursorPosition(e) {
        setCursorX(e.clientX);
        setCursorY(e.clientY);
      }
  
      document.addEventListener('mousemove', updateCursorPosition);
  
      return () => {
        document.removeEventListener('mousemove', updateCursorPosition);
      };
    }, []); 

  return(
        <BrowserRouter>
            <S.Nav>
                <div className="cursor" style={{ left: cursorX, top: cursorY }}></div>
                <S.Ul>
                    <li> <Link to="/"> Início </Link> </li>
                    <li> <Link to="/Sobre"> Sobre </Link> </li>
                    <li> <Link to="Projetos"> Projetos </Link> </li>
                </S.Ul>
            </S.Nav>

            <Routes>
                <Route path="/" element={ <Inicio /> } />
                <Route path="Sobre" element={ <Sobre /> } />
                <Route path="Projetos" element={ <Projetos /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Navegacao