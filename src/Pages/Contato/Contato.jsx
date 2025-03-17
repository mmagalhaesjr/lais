import { Link } from "react-router-dom";
import { StyledContato } from "./styled";

export default function Contato() {
    return (
        <StyledContato>

            <Link to={"/"}>
                <p>
                    &lt; Voltar
                </p>
            </Link>

        </StyledContato>
    )
}