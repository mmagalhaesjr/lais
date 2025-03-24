import { Link } from "react-router-dom";
import { StyledContato } from "./styled";

export default function Contato() {

    const whatsapp = "https://api.whatsapp.com/send?phone=2498836-1233"
    return (
        <StyledContato>

            <Link to={"/"}>
                <p id="voltar">
                    &lt; Voltar
                </p>
            </Link>

            <section>



                <Link to={whatsapp} target="_blank" rel="noreferrer" >
                    <p>
                        Telefone: (24) 98836-1233
                    </p>
                </Link>

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