import { Link } from "react-router-dom";
import { StyledProjetos } from "./styled";

export default function Projetos() {
    return (
        <StyledProjetos>

            <Link to={"/"}>
                <p id="voltar">
                    &lt; Voltar
                </p>
            </Link>

            <section id="containerImg"  >

                <h2>"imagens"</h2>

            </section>

            <section id='containeTexto'>

                <h2>
                    DESIGN DE CONVITES PARA A MARCA <br></br>
                    <span>MUSIC BOX KARAOKE STUDIO©</span>
                </h2>

                <p>
                    Para os eventos de inauguração do Music Box, desenvolvi um convite nada
                    convencional: um CD personalizado, trazendo um toque nostálgico e interativo à
                    experiência dos convidados. Cada CD carrega o nome do convidado, tornando o
                    convite único e exclusivo, reforçando a identidade da marca e a conexão com a música.
                </p>

                <p>
                    A experiência se completa com um folheto informativo dentro do CD, onde os
                    convidados encontram detalhes sobre o espaço, sua proposta e diferenciais. No verso,
                    uma composição visual apresenta figuras icônicas da música, criando um material
                    colecionável e visualmente impactante.
                </p>

                <p>
                    Este projeto combina design, nostalgia e personalização, criando uma peça 100%
                    autêntica, tornando a chegada ao Music Box uma experiência memorável desde o
                    primeiro contato.
                </p>

            </section>

        </StyledProjetos>
    )
}