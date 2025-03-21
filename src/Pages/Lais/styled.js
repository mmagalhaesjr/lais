import styled from "styled-components";


export const StyledLais = styled.main`

width: 100%;
height: 100vh;
position: relative;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

#voltar {
        position: absolute;
        top: 5%;
        left: 3%;
        color: #000000;
        cursor: pointer;
        z-index: 99;
    }

#sectionFotos{
    width: 100%;
    height: 100vh;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
}

img{
    width: 20%;
}
#imgP{
    position: absolute;
    top: 10%;
    left: 33%;
    animation: aparecer 0s .5s forwards;
}#imgG{
    position: absolute;
    top: 20%;
    right: 30%;
    animation: aparecer 0s 1.5s forwards;
}

@keyframes aparecer {
    0% {
      opacity: 0;
      visibility: hidden;
    }
 
    100% {
      opacity: 1;
      visibility: visible;
    }
  }

  #imgP,
  #imgG {
    position: absolute;
    opacity: 0;
    visibility: hidden;
  }





#sectionTexto{
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
}

.texto{
    width: 40%;
    font-size: 1.5rem;
    line-height: 1.4;
    margin-top: 10%;
   
}





@media (max-width:800px) {
    img{
        width: 40%;
    }
#imgP{
    position: absolute;
    top: 30%;
    left: 13%;
    animation: aparecer 0s 1s forwards;
}#imgG{
    position: absolute;
    top: 40%;
    right: 13%;
    animation: aparecer 0s 2s forwards;
}

.texto{
    width: 90%;
    font-size:1.1rem;
    line-height: 1.4;
    margin-top: 0%;
   
}

}


`