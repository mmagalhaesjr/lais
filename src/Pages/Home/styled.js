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
    position: fixed;
    top: 50px;
    font-size: 10rem;
    z-index: 0;
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
    top: 30%;
    left: 50%;
    width: 15%;
    z-index: 7;
    animation: aparecer 0s 5s forwards;
  }

  #img6 {
    top: 20%;
    left: 55%;
    width: 20%;
    z-index: 6;
    animation: aparecer 0s 6s forwards;
  }

  #rodape p {
    font-size: 2rem;
    cursor: pointer;
    color: #000000;
  }

  #rodape {
    width: 90%;
    position: absolute;
    bottom: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 800px) {
    h1 {
      position: fixed;
      top: 50px;
      font-size: 5rem;
      z-index: 0;
    }
    #img1 {
    top: 25%;
    left: 35%;
    width: 30%;
    z-index: 1;
    animation: aparecer 0s 1s forwards;
  }

  #img2 {
    top: 30%;
    left: 10%;
    width: 30%;
    z-index: 2;
    animation: aparecer 0s 2s forwards;
  }

  #img3 {
    top: 50%;
    left: 35%;
    width: 30%;
    z-index: 3;
    animation: aparecer 0s 3s forwards;
  }

  #img4 {
    top: 40%;
    left: 50%;
    width: 30%;
    z-index: 6;
    animation: aparecer 0s 4s forwards;
  }

  #img5 {
    top: 50%;
    left: 20%;
    width: 30%;
    z-index: 7;
    animation: aparecer 0s 5s forwards;
  }

  #img6 {
    top: 50%;
    left: 55%;
    width: 40%;
    z-index: 6;
    animation: aparecer 0s 6s forwards;
  }
  }
`;
