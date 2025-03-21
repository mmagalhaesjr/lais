import styled from "styled-components";

export const StyledProjetos = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    overflow-y: auto;
    padding: 20px;

    #voltar {
        position: absolute;
        top: 5%;
        left: 3%;
        color: #000000;
        font-size: 2rem;
        font-weight: bold;
    }

    img {
        position: absolute;
        transition: transform 0.3s ease;
    }

  
    #boneco { width:30%; top: 70%; left: 10%; }
    #poster { width:15%; top: 15%; left: 5%; }
    #cd { width:15%; top: 10%; right: 5%; }
    #coporosa { width:15%; top: 5%; left: 40%; }
    #copo {width:20%; top: 30%; left: 50%; }
    #jornal {width:15%; top: 30%; left: 25%; }
    #vermelho {width:35%; top: 95%; right: 15%; }
    #adesivorosa {width:15%; top: 55%; right: 5%; }
    #adesivoroxo {width:15%; top: 65%; right: 1%; }

    img:hover {
        transform: scale(1.1);
    }

    @media (max-width: 800px) {
        
          
    #boneco { width:55%; top: 60%; left: 0%; z-index:9 }
    #poster { width:30%; top: 15%; left: 5%; }
    #cd { width:30%; top: 25%; right: 5%; }
    #coporosa { width:30%; top: 5%; left: 40%; }
    #copo {width:30%; top: 40%; left: 60%; }
    #jornal {width:25%; top: 40%; left: 25%; }
    #vermelho {width:80%; top: 85%; right: 0%; }
    #adesivorosa {width:25%; top: 63%; right: 5%; }
    #adesivoroxo {width:25%; top: 68%; right: 1%; }
    }
`;
