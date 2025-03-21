import { Link } from "react-router-dom";
import { StyledContato } from "./styled";

export default function Contato() {
    return (
        <StyledContato>

            <Link to={"/"}>
                <p id="voltar">
                    &lt; Voltar
                </p>
            </Link>

            <section>

                <p>
                    Telefone: (24) 98836-1233
                </p>

                <p>
                    E-mail: lais.sindorf@design.ufjf.br
                </p>

                <Link to={'https://www.linkedin.com/in/lais-sindorf-8a11331a2/'} target="blank">
                    <p>
                        Linkedin: https://www.linkedin.com/ in/lais-sindorf-8a11331a2/
                    </p>
                </Link>

            </section>

        </StyledContato>
    )
}