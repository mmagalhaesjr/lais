import styled from "styled-components";


export const StyledContato = styled.main`

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
        font-size: 2rem;
        font-weight: bold;
    }

section{
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

}
section p{
    font-size: 5rem;
    color: #000000;
    margin-top: 5%;

}



`