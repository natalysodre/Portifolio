import React from "react"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from "./Style.jsx"
import VNW from "../assets/VNW.png"
import CSS from "../assets/CSS.png"
import JS from "../assets/JS.png"
import HTML from "../assets/HTML.png"
import RT from "../assets/React.png"

function Sobre(){

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return(
    <S.Sobre>

      <S.SobreMim>
        <h2>Sobre mim</h2>

        <div>
          <p> Olá, meu nome é Nataly e tenho 27 anos. Sou Bióloga e Mestra em Promoção da Saúde, Desenvolvimento Humano e Sociedade. Recentemente, embarquei em uma emocionante jornada de transição de carreira para o mundo da tecnologia.</p>
            
          <p> Decidi explorar novos horizontes e mergulhei de cabeça no desenvolvimento front-end. Com a minha curiosidade insaciável e habilidades analíticas afiadas, dominei rapidamente as tecnologias web padrão como HTML, CSS e JavaScript.</p>

          <p> O meu principal objetivo é utilizar as minhas experiências para criar soluções tecnológicas inovadoras e abrangentes. Com determinação e habilidades em desenvolvimento front-end, estou pronta para transformar o mundo digital em ecossistemas de interatividade.</p>
        </div>

      </S.SobreMim>


      <S.Estudos>
        <h2>Estudos</h2>

        <div>
          <h3>Desenvolvimento Front-End</h3>
          <p>AGO/2023 - MAIO/2024</p>
        </div>

        <img src={VNW} alt="logo vai na web" />
      </S.Estudos>

      <S.Habilidades>
        <h2>Habilidades</h2>
        <Slider {...settings}>
          <div>
            <img src={CSS} alt="" />
          </div>

          <div>
            <img src={JS} alt="" />
          </div>

          <div>
            <img src={HTML} alt="" />
          </div>

          <div>
            <img src={RT} alt="" />
          </div>
        </Slider>
      </S.Habilidades>
    </S.Sobre>
  )
}

export default Sobre