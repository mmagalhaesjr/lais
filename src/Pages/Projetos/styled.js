import styled from "styled-components";

export const StyledProjetos = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column; 
    align-items: center; 
    justify-content: start; 
    overflow: hidden;
    overflow-y: auto;

    #voltar {
        position: absolute;
        top: 5%;
        left: 3%;
        color: #000000;
    }

    #containerImg {
        width: 100%;
        height: 50%;
        border: solid 2px orange;

        display: flex;
        flex-direction: column;
        align-items:center ;
        justify-content: center;
    }

    #containeTexto {
        width: 70%;
        height: fit-content;
     
        padding: 20px;
        border: solid 2px red;

        display: flex;
        flex-direction: column;
        align-items:center ;
        justify-content: center;
    }

    h2 {
        font-size: 2rem;
        color: #000000;
    }
    
    h2 span {
        font-weight: bold;
        font-size: 2.3rem;
    }

    #containeTexto p {
        font-size: 1rem;
        margin-top: 5%;
    }
`;
