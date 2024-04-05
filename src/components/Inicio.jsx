import React from 'react';
import Perfil from "../assets/Foto.png"
import GitHub from "../assets/github.png"
import Linkedin from "../assets/linkedin.png"
import * as S from "./Style.jsx"

function Inicio(){

  return(
    <S.Inicio>
      <img src={Perfil} alt="Foto do perfil" />

      <S.ContainerDivs>
        <S.BoasVindas>
          <h3> Olá! Meu nome é </h3>
          <h2> Nataly Sodré</h2>
          <h3> Desenvolvedora Front-End Junior </h3>
          <p>Bem-vindos ao meu universo de pixels, onde a biologia se encontrou com o mundo digital e nasceu uma paixão pelo desenvolvimento front-end! Decidi trocar o laboratório pelo HTML, CSS e JavaScript, transformando meu conhecimento em experiências digitais incríveis. Junte-se a mim nesta jornada selvagem de descoberta digital!</p>
        </S.BoasVindas>

        <S.RedesSociais>
          <a href="https://github.com/natalysodre" target="_blank"><img src={GitHub} alt="logo do github" /></a>
          <a href="https://www.linkedin.com/in/natalyssodre/" target="_blank"><img src={Linkedin} alt="logo do linkedin" /></a>
        </S.RedesSociais>
      </S.ContainerDivs>
      
    </S.Inicio>
  ) 
}

export default Inicio