import styled from "styled-components";

export const StyledHome = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
  }

  h1 {
    width: 100%;
    position: fixed;
    top: 50px;
    left: 0;
    font-size: 18rem;
    z-index: 0;
    cursor: pointer;
    text-align: center;
    color: #000000;
  }

  section {
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;
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

  /* Estilização das imagens */
  #img1,
  #img2,
  #img3,
  #img4,
  #img5,
  #img6 {
    position: absolute;
    opacity: 0;
    visibility: hidden;
  }

  #img1 {
    top: 25%;
    left: 35%;
    width: 17%;
    z-index: 1;
    animation: aparecer 0s 1s forwards;
  }

  #img2 {
    top: 45%;
    left: 25%;
    width: 16%;
    z-index: 2;
    animation: aparecer 0s 2s forwards;
  }

  #img3 {
    top: 50%;
    left: 35%;
    width: 15%;
    z-index: 3;
    animation: aparecer 0s 3s forwards;
  }

  #img4 {
    top: 30%;
    left: 50%;
    width: 20%;
    z-index: 6;
    animation: aparecer 0s 4s forwards;
  }

  #img5 {
    top: 40%;
    left: 45%;
    width: 20%;
    z-index: 7;
    animation: aparecer 0s 5s forwards;
  }

  #img6 {
    top: 20%;
    left: 55%;
    width: 30%;
    z-index: 6;
    animation: aparecer 0s 6s forwards;
  }

  #rodape {
    width: 95%;
    position: absolute;
    bottom: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #rodape p {
    font-size: 5rem;
    cursor: pointer;
    color: #000000;

  }

 

  @media (max-width: 800px) {
  
    h1 {
      position: fixed;
      top: 50px;
      font-size: 3.5rem;
      z-index: 0;
      
    }
   #rodape{
    margin-bottom: 0%;
   }

   #rodape p{
      font-size: 2rem;
    }
    #img1 {
    top: 25%;
    left: 40%;
    width: 35%;
    z-index: 1;
    animation: aparecer 0s 1s forwards;
  }

  #img2 {
    top: 30%;
    left: 10%;
    width: 40%;
    z-index: 2;
    animation: aparecer 0s 2s forwards;
  }

  #img3 {
    top: 50%;
    left: 35%;
    width: 40%;
    z-index: 3;
    animation: aparecer 0s 3s forwards;
  }

  #img4 {
    top: 40%;
    left: 55%;
    width: 40%;
    z-index: 6;
    animation: aparecer 0s 4s forwards;
  }

  #img5 {
    top: 50%;
    left: 10%;
    width: 40%;
    z-index: 7;
    animation: aparecer 0s 5s forwards;
  }

  #img6 {
    top: 60%;
    left: 50%;
    width: 50%;
    z-index: 6;
    animation: aparecer 0s 6s forwards;
  }
  }
`;
