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
        border: solid 2px red;


        display: flex;
        align-items: center;
        justify-content: center;
    }
    #img1{
        position: absolute;
        top: 25%;
        left: 15%;
        width: 17%;
        z-index: 2;
    }
    #img2{
        position: absolute;
        top: 30%;
        left: 30%;
        width: 16%;
        z-index: 1;
    }

    #img3{
        position: absolute;
        top: 35%;
        left: 45%;
        width: 20%;
        z-index: 2;
    }

    #img4{
        position: absolute;
        top: 45%;
        right: 10%;
        width: 25%;
        height: 250px;
        z-index: 1;
    }
    

    #rodape p{
        font-size: 2rem;
    }

 






    #rodape{
        width: 90%;
        position: absolute;
        bottom: 50px;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

 `