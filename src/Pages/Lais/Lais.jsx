import { Link } from "react-router-dom";
import { StyledLais } from "./styled";

import p from '../../assets/lais/p.png'
import g from '../../assets/lais/g.png'

export default function Lais() {
    return (
        <StyledLais>

            <Link to={"/"}>
                <p id="voltar">
                    &lt; Voltar
                </p>
            </Link>

            <section id="sectionFotos">

                <img id="imgP" src={p} alt="img" />
                <img id="imgG" src={g} alt="img" />

            </section>
            <section id="sectionTexto">
                <p className="texto">
                    Sou artista multimídia e designer,
                    formada pela Universidade Federal
                    de Juiz de Fora e pela Escola Britânica
                    de Artes Criativas e Tecnologia.
                </p>


                <p className="texto">
                    Atuo na área criativa há 5 anos e
                    possuo experiência em gestão criativa_
                    identidade visual_copywriting_artes
                    visuais.
                </p>


                <p className="texto">
                    Motivada pelo potencial de criação e
                    inovação estética (manuais ou digitais),
                    busco evolução e aprimoramento,
                    personificando ideais_marcas_
                    movimentos.
                </p>

            </section>

        </StyledLais>
    )
}