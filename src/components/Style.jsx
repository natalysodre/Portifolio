import styled from "styled-components"

//---Estilização da Navegação

export const Nav = styled.nav`
    background-color: #111D13;
    .cursor{
        position: fixed;
        border-radius: 50%;
        box-shadow: 0px 0px 400px 150px #8FB996;
        background-color: #8FB996;
        pointer-events: none;
        mix-blend-mode: screen;
        transform: translate(-50%, -50%);
        z-index: 9999;
    }

    @media(min-width:320px) and (max-width:768px){
        .cursor{
            display: none;
        }
    }
`

export const Ul = styled.ul`
    height: 15vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;

    a{
        font-size: 15px;
        padding: 4rem;
        text-decoration: none;
        color: white;
    }

    a:hover{
        color: #8FB996;
    }

    @media(min-width:320px) and (max-width:768px){
        height: 25vh;
        flex-direction: column;
        justify-content: space-evenly;
        
        .Cardapio {
            display: initial;
            background-color: rgba(12, 5, 0, 1);
            width: 30%;
            height: 100%;
        }
    }
`
//---Estilização do Inicio

export const Inicio = styled.section`
    height: 85vh; 
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #111D13;

    img{
        border-radius: 50%;
        box-shadow: 0px 0px 30px -6px rgba(0, 0, 0, 1);
    }

    @media(min-width:320px) and (max-width:768px){
        height: 120vh; 
        flex-direction: column;

        img{
            width: 50vw;
        }
    }
`

export const ContainerDivs = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 70vh;
    width: 60%;

    @media(min-width: 320px) and (max-width:768px){
        width: 90%;
        height: 110vh;
    }

`

export const BoasVindas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 60vh;

    h3{
        color: white;
        font-size: 20px;
        font-weight: 400;
        text-align: center;
    }

    h2{
        color: #8FB996;
        font-size: 50px;
        font-weight: 700;
        text-align: center;
    }

    p{
        color: white;
        width: 85%;
        font-size: 15px;
        text-align: center;
        line-height: 2.0em;
    }

    @media(min-width: 320px) and (max-width:768px){
        height: 75vh;

        h3{
            font-size: 18px;
        }

        h2{
            font-size: 40px;
        }

        p{
            text-align: left;
        }
    }
`
export const RedesSociais = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 30%;
    
    @media(min-width: 320px) and (max-width:768px){
        width: 80%;

        img{
            width: 15vw;
        }
    }
`

//---Estilização do Sobre


export const Sobre = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 85vh;
    background-color: #111D13;

    @media(min-width:320px) and (max-width:768px){
        height: 200vh; 
        flex-direction: column;
    }
`

export const SobreMim = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 80vh;
    width: 40vw;

    h2{
        color: #8FB996;
        font-size: 40px;
        font-weight: 700;
        text-align: center;
    }

    p{
        color: white;
        width: 85%;
        font-size: 15px;
        line-height: 1.5em;
        margin-bottom: 1.5rem;
    }

    @media(min-width: 320px) and (max-width:768px){
        height: 95vh;
        width: 80%;

        p{
            width: 90%;
        }
    }
`


export const Estudos = styled.section`
    width: 20vw;
    height: 45vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    background-color: #415D43;
    box-shadow: 0px 0px 30px -6px rgba(0, 0, 0, 1);
    border-radius: 30px;

    h3{
        color: white;
        font-size: 15px;
        font-weight: 400;
        text-align: center;
        background-color: #415D43;
    }

    h2{
        color: #8FB996;
        font-size: 30px;
        font-weight: 700;
        text-align: center;
        background-color: #415D43;
    }

    p{
        color: white;
        font-size: 11px;
        text-align: center;
        line-height: 2.0em;
        background-color: #415D43;
    }

    img{
        background-color: #415D43;
    }

    @media(min-width: 320px) and (max-width:768px){
        width: 80%;
        height: 35vh;
    }
`


export const Habilidades = styled.section`
    width: 20vw;
    height: 45vh;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    background-color: #415D43;
    box-shadow: 0px 0px 30px -6px rgba(0, 0, 0, 1);
    border-radius: 30px;


    h2{
        color: #8FB996;
        font-size: 30px;
        font-weight: 700;
        text-align: center;
    }

    img{
        height: 10vh;
        margin: 0 auto; 
        display: block;
    }

    @media(min-width: 320px) and (max-width:768px){
        width: 80%;
        height: 35vh;

        h2{
            font-size: 30px;
        }

        img{
            height: 10vh;
        }
    }
`
//---Estilização do Projetos

export const Projetos = styled.section`
    background-color: #111D13;
    height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        width: 80vw;
        display: flex;
        justify-content: center;
    }

    h2{
        color: #8FB996;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
    }

    h3{
        color: white;
        font-size: 10px;
        font-weight: 700;
        text-align: center;
        border-radius: 30px;
    }

    img{
        height: 25vh;
        margin: 0 auto; 
        display: block;
    }

    @media(min-width: 320px) and (max-width:768px){

        h2{
            font-size: 20px;
        }
    }
`
