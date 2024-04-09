import React from "react";
import Fantastika from"../assets/Fantastika.png"
import Cruzeiro from"../assets/Cruzeiro.png"
import Cartoon from"../assets/Cartoon.png"
import Patrocinadores from"../assets/Patrocinadores.png"
import * as S from "./Style"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projetos(){

  const desafios = [
    {imagem: Fantastika, titulo: "Fantastika", link: "https://github.com/natalysodre/desafio-fantastika.git", descricao: "HTML, CSS e Design Responsivo"},
    {imagem: Cruzeiro, titulo: "Cruzeiro do Roberto Carlos", link: "https://github.com/natalysodre/desafio-logica.git", descricao: "Lógica"},
    {imagem: Cartoon, titulo: "Cartoon Network", link: "https://github.com/natalysodre/cartoon-network.git", descricao: "React, Styled-components, useState, useEffect, Map, Filter, Lógica"},
    {imagem: Patrocinadores, titulo: "Patrocinadores", link: "https://github.com/natalysodre/useEffect.git", descricao: "Dom, useEffect, useState, Styled-components, Props"},
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return(
    <S.Projetos>
      <Slider {...settings}>
        {desafios.map((item)=>(
          <div>
            <a href={item.link} target="_blank"><img src={item.imagem} alt={item.titulo} /></a>
            <h2>{item.titulo}</h2>
            <h3>{item.descricao}</h3>
          </div>
        ))}
      </Slider>
    </S.Projetos>
  )
}

export default Projetos