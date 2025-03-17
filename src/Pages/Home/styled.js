import styled from "styled-components";


export const StyledHome = styled.main`
    width: 100%;
    height: 100vh;
    position: relative;


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        width: 100px;
    }
    h1{
        position: fixed;
        top: 50px;
        font-size: 10rem;
        z-index: 0;
    }
    section{
        width: 100%;
        height: 100px;
       
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #img1{
        position: absolute;
        top: 45%;
        left: 5%;
        width: 17%;
        z-index: 9;
    }
    #img2{
        position: absolute;
        top: 25%;
        left: 20%;
        width: 16%;
        z-index: 8;
    }

    #img3{
        position: absolute;
        top: 50%;
        left: 35%;
        width: 20%;
        z-index: 9;
    }

    #img4{
        position: absolute;
        top: 30%;
        left: 33%;
        width: 20%;
        z-index: 6;
    }

    #img5{
        position: absolute;
        top: 30%;
        left: 45%;
        width: 20%;
       
        z-index: 7;
    }
    #img6{
        position: absolute;
        top: 45%;
        left: 55%;
        width: 17%;
        z-index: 6;
    }
    #img7{
        position: absolute;
        top: 30%;
        left: 70%;
        width: 17%;
        z-index: 5;
    }
    #img8{
        position: absolute;
        top: 45%;
        right: 10%;
        width: 25%;
        height: 250px;
        z-index: 1;
    }
    #img9{
        position: absolute;
        top: 20%;
        right: 2%;
        width: 17%;
        z-index: 6;
    }

    #rodape p{
        font-size: 2rem;
        cursor: pointer;
        color: #000000;
    }

 

    #rodape{
        width: 90%;
        position: absolute;
        bottom: 50px;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }


     /* ANIMAÇÕES */
     @keyframes fromLeft {
        from {
            transform: translateX(-100vw);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes fromRight {
        from {
            transform: translateX(100vw);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    /* Aplicando animações */
    #img1, #img3, #img5, #img7, #img9 {
        animation: fromLeft 2s ease-out forwards;
    }

    #img2, #img4, #img6, #img8 {
        animation: fromRight 2s ease-out forwards;
    }




    @media (max-width: 800px) {
        h1{
        position: fixed;
        top: 50px;
        font-size:5rem;
        z-index: 0;
    }
    #img1{
        position: absolute;
        top: 25%;
        left: 5%;
        width: 30%;
        z-index: 9;
    }
    #img2{
        position: absolute;
        top: 35%;
        left: 20%;
        width: 25%;
        z-index: 8;
    }

    #img3{
        position: absolute;
        top: 50%;
        left: 35%;
        width: 30%;
        z-index: 9;
    }

    #img4{
        position: absolute;
        top: 30%;
        left: 33%;
        width: 30%;
       
        z-index: 6;
    }

    #img5{
        position: absolute;
        top: 30%;
        left: 55%;
        width: 30%;
       
        z-index: 7;
    }
    #img6{
        position: absolute;
        top: 45%;
        left: 55%;
        width: 25%;
        z-index: 6;
    }
    #img7{
        position: absolute;
        top:50%;
        left:80%;
        width: 25%;
        z-index: 5;
    }
    #img8{
        position: absolute;
        top: 45%;
        right: 10%;
        width: 25%;
        height: 250px;
        z-index: 1;
    }
    #img9{
        position: absolute;
        top: 20%;
        right: 0%;
        width: 25%;
        z-index: 6;
    }
    }

 `